/*
  Warnings:

  - A unique constraint covering the columns `[statusId]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "TableStatus" ALTER COLUMN "timestamp" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Member_statusId_key" ON "Member"("statusId");
