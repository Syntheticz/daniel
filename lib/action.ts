"use server";

import { PrismaClient } from "@/src/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
  adapter,
});

function isFourthSunday(date: Date): boolean {
  if (date.getDay() !== 0) return false; // Sunday

  const dayOfMonth = date.getDate();
  return dayOfMonth >= 22 && dayOfMonth <= 28;
}

type AttendanceStatus = "Present" | "Late" | "Absent";

function getAttendanceStatus(submittedAt?: string | null): AttendanceStatus {
  if (!submittedAt) return "Absent";

  const date = new Date(submittedAt);
  const day = date.getDay(); // 0 = Sun, 3 = Wed

  let cutoff: Date | null = null;

  // Wednesday (7:30 AM)
  if (day === 3) {
    cutoff = new Date(date);
    cutoff.setHours(7, 30, 0, 0);
  }

  // Sunday
  if (day === 0) {
    cutoff = new Date(date);

    if (isFourthSunday(date)) {
      cutoff.setHours(10, 0, 0, 0); // 4th Sunday
    } else {
      cutoff.setHours(9, 0, 0, 0); // regular Sunday
    }
  }

  // Any other day defaults to Present
  if (!cutoff) return "Present";

  return date > cutoff ? "Late" : "Present";
}

export async function fetchMembers() {
  const members = await prisma.member.findMany({});
  return members;
}

export async function finalizeAttendance(
  data: {
    id: string;
    name: string;
    status: string;
    submittedAt: string | null;
  }[]
) {
  for (const member of data) {
    if (member.submittedAt) {
      await prisma.attendanceTimestamp.create({
        data: { memberId: member.id, date: member.submittedAt },
      });

      const status = getAttendanceStatus(member.submittedAt);

      await prisma.member.update({
        where: { id: member.id },
        data: {
          present: status === "Present" ? { increment: 1 } : undefined,
          late: status === "Late" ? { increment: 1 } : undefined,
        },
      });
    } else {
      await prisma.member.update({
        where: { id: member.id },
        data: { absent: { increment: 1 } },
      });
    }
  }
}
