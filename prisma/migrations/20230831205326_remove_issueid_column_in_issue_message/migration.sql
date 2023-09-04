/*
  Warnings:

  - You are about to drop the column `issueId` on the `IssueMessage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "IssueMessage" DROP CONSTRAINT "IssueMessage_issueId_fkey";

-- AlterTable
ALTER TABLE "IssueMessage" DROP COLUMN "issueId";
