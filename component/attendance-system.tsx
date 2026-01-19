"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, Download, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchMembers,
  finalizeAttendance,
  resetTable,
  updateTable,
} from "@/lib/action";
import { Spinner } from "@/components/ui/spinner";
import { AddMemberDialog } from "./add-member-dialog";

interface Attendee {
  id: string;
  name: string;
}

interface AttendanceRecord {
  id: string;
  submittedAt: string; // changed to string for JSON serialization
}

const STORAGE_KEY = "attendance-records";

function loadRecords(): Map<string, AttendanceRecord> {
  if (typeof window === "undefined") return new Map();
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return new Map();
  try {
    const parsed = JSON.parse(stored) as [string, AttendanceRecord][];
    return new Map(parsed);
  } catch {
    return new Map();
  }
}

function saveRecords(records: Map<string, AttendanceRecord>) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(Array.from(records.entries())),
  );
}

function generateSpreadsheet(
  attendees: Attendee[],
  records: Map<string, AttendanceRecord>,
) {
  const headers = ["Name", "Status", "Date", "Time"];
  const rows = attendees.map((attendee) => {
    const record = records.get(attendee.id);
    const date = record ? new Date(record.submittedAt) : null;
    return [
      attendee.name,
      record ? "Present" : "Absent",
      date ? date.toLocaleDateString() : "-",
      date ? date.toLocaleTimeString() : "-",
    ];
  });

  const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `attendance-${new Date().toISOString().split("T")[0]}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export default function AttendanceSystem() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [submittedRecords, setSubmittedRecords] = useState<
    Map<string, AttendanceRecord>
  >(new Map());
  const [customTimes, setCustomTimes] = useState<Map<string, string>>(
    new Map(),
  );
  const [isLoaded, setIsLoaded] = useState(false);

  const { data: members = [], isLoading } = useQuery({
    queryKey: ["members"],
    queryFn: fetchMembers,
    refetchInterval: 5000,
    refetchIntervalInBackground: false,
  });

  const { mutate: finalize } = useMutation({
    mutationFn: finalizeAttendance,
  });

  const attendees: Attendee[] = useMemo(() => {
    return members
      .slice()
      .sort((a, b) => a.lastName.localeCompare(b.lastName))
      .map((member) => ({
        id: member.id,
        name: `${member.lastName}, ${member.firstName}`,
      }));
  }, [members]);

  useEffect(() => {
    if (!members.length) return;

    setSubmittedRecords((prev) => {
      const newMap = new Map(prev);

      for (const member of members) {
        if (member.status.status === "PRESENT") {
          newMap.set(member.id, {
            id: member.id,
            submittedAt: member.status.timestamp?.toISOString() || "",
          });
        }
      }

      return newMap;
    });

    setIsLoaded(true);
  }, [members]);

  useEffect(() => {
    if (isLoaded) {
      saveRecords(submittedRecords);
    }
  }, [submittedRecords, isLoaded]);

  const filteredAttendees = useMemo(() => {
    if (!searchQuery.trim()) return attendees;
    const query = searchQuery.toLowerCase();
    return attendees.filter((a) => a.name.toLowerCase().includes(query));
  }, [searchQuery, attendees]);

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (submittedRecords.has(id)) return;
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  };

  const handleTimeChange = (id: string, time: string) => {
    if (submittedRecords.has(id)) return;
    setCustomTimes((prev) => {
      const newMap = new Map(prev);
      newMap.set(id, time);
      return newMap;
    });
  };

  const handleFinalizeAttendance = () => {
    const finalized = attendees.map((attendee) => {
      const record = submittedRecords.get(attendee.id);
      return {
        id: attendee.id,
        name: attendee.name,
        status: record ? "Present" : "Absent",
        submittedAt: record?.submittedAt ?? null,
      };
    });

    finalize(finalized);
    alert("Attendance Finalized");
    handleDownloadSpreadsheet();
    handleReset();
  };

  const handleSubmit = async () => {
    const now = new Date();
    const updates: { id: string; submittedAt: string }[] = [];

    for (const id of selectedIds) {
      const customTime = customTimes.get(id);

      let submittedAt = now;

      if (customTime) {
        const [hours, minutes] = customTime.split(":").map(Number);
        submittedAt = new Date();
        submittedAt.setHours(hours, minutes, 0, 0);
      }

      // ✅ async call OUTSIDE setState
      await updateTable(id, submittedAt.toISOString());

      updates.push({
        id,
        submittedAt: submittedAt.toISOString(),
      });
    }

    // ✅ synchronous state update
    setSubmittedRecords((prev) => {
      const newMap = new Map(prev);

      for (const record of updates) {
        if (!newMap.has(record.id)) {
          newMap.set(record.id, record);
        }
      }

      return newMap;
    });

    setSelectedIds(new Set());
  };

  const handleDownloadSpreadsheet = () => {
    generateSpreadsheet(attendees, submittedRecords);
  };

  const handleReset = async () => {
    await resetTable();
    setSelectedIds(new Set());
    setSubmittedRecords(new Map());
    setCustomTimes(new Map());
  };

  const hasPendingSelections = selectedIds.size > 0;

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner className="size-16" />
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-[100dvh] max-w-md flex-col p-4 pb-safe">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-12 pl-10 text-base"
        />
      </div>

      <div className="mb-4 flex-1 space-y-2 overflow-y-auto">
        {isLoading && (
          <div className="w-full h-full flex justify-center items-center">
            <Spinner className="size-16" />
          </div>
        )}
        {filteredAttendees.map((attendee) => {
          const isSubmitted = submittedRecords.has(attendee.id);
          const isSelected = selectedIds.has(attendee.id);
          const isChecked = isSubmitted || isSelected;
          const record = submittedRecords.get(attendee.id);
          const recordDate = record ? new Date(record.submittedAt) : null;
          return (
            <div
              key={attendee.id}
              className={`flex items-center gap-3 rounded-lg border p-4 transition-colors ${
                isSubmitted
                  ? "border-green-500 bg-green-100"
                  : "border-border bg-card"
              }`}
            >
              <Checkbox
                id={attendee.id}
                checked={isChecked}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(attendee.id, checked === true)
                }
                disabled={isSubmitted}
                className="h-6 w-6"
              />
              <label
                htmlFor={attendee.id}
                className={`min-w-0 flex-1 truncate text-base ${
                  isSubmitted ? "cursor-default" : "cursor-pointer"
                } text-foreground`}
              >
                {attendee.name}
              </label>
              {isSubmitted ? (
                <span className="shrink-0 text-sm font-medium text-green-700">
                  {recordDate?.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              ) : (
                <input
                  type="time"
                  value={customTimes.get(attendee.id) || ""}
                  onChange={(e) =>
                    handleTimeChange(attendee.id, e.target.value)
                  }
                  className="h-10 w-[5.5rem] shrink-0 rounded-md border border-border bg-background px-2 text-base"
                />
              )}
            </div>
          );
        })}

        {filteredAttendees.length === 0 && !isLoading ? (
          <div className="py-8 text-center text-muted-foreground">
            No attendees found.
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button
          onClick={handleSubmit}
          disabled={!hasPendingSelections}
          className="h-12 w-full text-base sm:flex-1"
        >
          Submit
        </Button>
        <div className="flex gap-2">
          <Button
            onClick={handleReset}
            variant="outline"
            className="h-12 flex-1 bg-transparent sm:flex-none"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
          <Button
            onClick={handleDownloadSpreadsheet}
            variant="secondary"
            className="h-12 flex-1 sm:flex-none"
          >
            <Download className="mr-2 h-4 w-4" />
            Spreadsheet
          </Button>
          <AddMemberDialog />
        </div>
        <Button
          onClick={handleFinalizeAttendance}
          // disabled={!hasPendingSelections}
          className="h-12 w-full text-base sm:flex-1"
        >
          Finalize Attendance
        </Button>
      </div>
    </div>
  );
}
