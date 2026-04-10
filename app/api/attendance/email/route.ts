import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS,
  },
});

export async function POST(req: NextRequest) {
  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  console.log(
    "GMAIL_APP_PASS:",
    process.env.GMAIL_APP_PASS ? "exists" : "missing",
  );
  const { csv, date } = await req.json();

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: "jhonphilipguiang@gmail.com",
    subject: `Attendance Report - ${date}`,
    text: "Please find the attendance report attached.",
    attachments: [
      {
        filename: `attendance-${date}.csv`,
        content: Buffer.from(csv, "utf-8"),
        contentType: "text/csv",
      },
    ],
  });

  return NextResponse.json({ success: true });
}
