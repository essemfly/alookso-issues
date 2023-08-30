-- AlterTable
ALTER TABLE "IssueMessage" ADD COLUMN     "issueId" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "IssueMessage" ADD CONSTRAINT "IssueMessage_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
