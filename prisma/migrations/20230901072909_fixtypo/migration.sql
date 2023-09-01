/*
  Warnings:

  - You are about to drop the column `RecommendWritings` on the `Issue` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Issue" DROP COLUMN "RecommendWritings",
ADD COLUMN     "recommendWritings" TEXT[];
