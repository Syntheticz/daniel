/*
  Warnings:

  - Added the required column `statusId` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "statusId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TableStatus" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ABSENT',
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TableStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "TableStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
