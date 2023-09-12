/*
  Warnings:

  - Added the required column `weight` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Issue" ADD COLUMN     "weight" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "IssueBlock" ADD COLUMN     "title" TEXT;
