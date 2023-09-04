/*
  Warnings:

  - Added the required column `issueId` to the `MessageLike` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MessageLike" ADD COLUMN     "issueId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "MessageLike" ADD CONSTRAINT "MessageLike_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
