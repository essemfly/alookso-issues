/*
  Warnings:

  - Added the required column `issueId` to the `IssueMessage` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `reportedAt` on the `IssueMessage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "IssueMessage" ADD COLUMN     "issueId" INTEGER NOT NULL,
DROP COLUMN "reportedAt",
ADD COLUMN     "reportedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "IssueMessage" ADD CONSTRAINT "IssueMessage_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
