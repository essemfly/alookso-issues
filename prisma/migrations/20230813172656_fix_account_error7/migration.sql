/*
  Warnings:

  - Changed the type of `bias` on the `IssueMessage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Bias" AS ENUM ('LEFT', 'CENTER', 'RIGHT');

-- AlterTable
ALTER TABLE "IssueMessage" DROP COLUMN "bias",
ADD COLUMN     "bias" "Bias" NOT NULL;
