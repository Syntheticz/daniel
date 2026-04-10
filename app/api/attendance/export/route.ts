// app/api/attendance/export/route.ts
import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { PrismaClient } from "@/src/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
  adapter,
});

export async function GET() {
  const members = await prisma.member.findMany({
    include: {
      timestamp: { orderBy: { date: "asc" } },
      status: true,
    },
    orderBy: [{ lastName: "asc" }, { firstName: "asc" }],
  });

  if (!members.length) {
    return NextResponse.json({ error: "No members found" }, { status: 404 });
  }

  const dateSet = new Set<string>();
  for (const member of members) {
    for (const ts of member.timestamp) {
      const local = new Date(
        ts.date.toLocaleString("en-US", { timeZone: "Asia/Manila" }),
      );
      dateSet.add(
        local.toLocaleDateString("en-PH", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      );
    }
  }

  const allDates = Array.from(dateSet).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime(),
  );

  const wb = new ExcelJS.Workbook();
  wb.creator = "Attendance System";
  wb.created = new Date();

  const sheet = wb.addWorksheet("Attendance");

  const headerFill: ExcelJS.Fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF1F3864" },
  };
  const summaryFill: ExcelJS.Fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF2E4D8A" },
  };
  const headerFont: Partial<ExcelJS.Font> = {
    name: "Arial",
    bold: true,
    color: { argb: "FFFFFFFF" },
    size: 10,
  };
  const valueFont: Partial<ExcelJS.Font> = { name: "Arial", size: 10 };
  const boldFont: Partial<ExcelJS.Font> = {
    name: "Arial",
    bold: true,
    size: 10,
  };

  sheet.columns = [
    { header: "Member Name", key: "name", width: 22 },
    ...allDates.map((d) => ({ header: d, key: d, width: 13 })),
    { header: "Present", key: "present", width: 10 },
    { header: "Absent", key: "absent", width: 10 },
    { header: "Late", key: "late", width: 10 },
  ];

  const headerRow = sheet.getRow(1);
  headerRow.eachCell((cell, colNum) => {
    cell.fill = colNum > 1 + allDates.length ? summaryFill : headerFill;
    cell.font = headerFont;
    cell.alignment = {
      horizontal: "center",
      vertical: "middle",
      wrapText: true,
    };
    cell.border = { bottom: { style: "thin", color: { argb: "FFAAAAAA" } } };
  });
  headerRow.height = 36;

  // build date counts in the same pass as member rows
  const dateCounts = new Map<string, number>();
  allDates.forEach((d) => dateCounts.set(d, 0));

  members.forEach((member, i) => {
    const memberDates = new Set(
      member.timestamp.map((ts) => {
        const local = new Date(
          ts.date.toLocaleString("en-US", { timeZone: "Asia/Manila" }),
        );
        return local.toLocaleDateString("en-PH", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      }),
    );

    // increment date counts while we already have memberDates
    for (const d of memberDates) {
      if (dateCounts.has(d)) {
        dateCounts.set(d, dateCounts.get(d)! + 1);
      }
    }

    const rowData: Record<string, string | number> = {
      name: `${member.firstName} ${member.lastName}`,
    };
    for (const date of allDates)
      rowData[date] = memberDates.has(date) ? "✓" : "✗";
    rowData.present = memberDates.size; // ✅ computed from timestamps
    rowData.absent = allDates.length - memberDates.size; // optional but consistent
    rowData.late = member.late; // untouched as requested

    const row = sheet.addRow(rowData);
    const shade = i % 2 === 0 ? "FFF5F7FA" : "FFFFFFFF";
    const summaryColStart = 2 + allDates.length;

    row.eachCell((cell, colNum) => {
      cell.alignment = { horizontal: "center", vertical: "middle" };
      if (colNum === 1) {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: shade },
        };
        cell.alignment = { horizontal: "left", vertical: "middle" };
        cell.font = boldFont;
      } else if (colNum >= summaryColStart) {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFEBF0FA" },
        };
        cell.font = boldFont;
      } else {
        const isPresent = cell.value === "✓";
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: isPresent ? "FFE6F4EA" : shade },
        };
        cell.font = {
          ...valueFont,
          color: { argb: isPresent ? "FF1E7E34" : "FFCC0000" },
          bold: isPresent,
        };
      }
    });
    row.height = 20;
  });

  sheet.views = [{ state: "frozen", xSplit: 1, ySplit: 1 }];

  const buffer = await wb.xlsx.writeBuffer();
  const date = new Date().toISOString().slice(0, 10);
  const fileName = `attendance_${date}.xlsx`;

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}

function columnLetter(n: number): string {
  let result = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    result = String.fromCharCode(65 + rem) + result;
    n = Math.floor((n - 1) / 26);
  }
  return result;
}
