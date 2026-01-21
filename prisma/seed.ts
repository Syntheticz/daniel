"use server";
import fs from "fs";
import { PrismaClient } from "@/src/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import path from "path";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
  adapter,
});

const filePath = path.join(__dirname, "data.csv");
const file = fs.readFileSync(filePath, "utf-8");
const [headerLine, ...lines] = file.split("\n");
const headers = headerLine.split(",");
const data = lines.map((line) => {
  const values = line.split(",");
  return headers.reduce(
    (obj, key, index) => {
      obj[key.trim()] = values[index]?.trim();
      return obj;
    },
    {} as Record<string, string>,
  );
});

async function main() {
  // 1️⃣ create all statuses
  const statuses = await prisma.tableStatus.createMany({
    data: data.map(() => ({ status: "ABSENT" })),
    skipDuplicates: true,
  });

  // 2️⃣ fetch their IDs
  const allStatuses = await prisma.tableStatus.findMany({
    where: {
      /* filter to only new statuses if needed */
    },
  });

  // 3️⃣ create members in batch
  await prisma.member.createMany({
    data: data.map((member, i) => ({
      firstName: member.firstname,
      lastName: member.lastname,
      absent: 0,
      late: 0,
      present: 0,
      statusId: allStatuses[i].id, // link status
    })),
    skipDuplicates: true,
  });

  console.log("Done!");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
