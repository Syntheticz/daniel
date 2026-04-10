"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Page() {
  const handleMembersExport = async () => {
    try {
      const res = await fetch("/api/attendance/export");
      if (!res.ok) throw new Error("Export failed");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `attendance_${new Date().toISOString().slice(0, 10)}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Failed to export attendance. Please try again.");
    }
  };

  return (
    <Button
      className="h-12 w-full text-base sm:flex-1"
      onClick={handleMembersExport}
    >
      Generate Report
    </Button>
  );
}
