-- CreateEnum
CREATE TYPE "IssueStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'REMOVED');

-- CreateTable
CREATE TABLE "Issue" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "slug" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "status" "IssueStatus" NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IssueBlock" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "issueId" INTEGER NOT NULL,
    "seq" INTEGER NOT NULL,
    "blockType" TEXT NOT NULL,
    "content" TEXT,
    "isRemoved" BOOLEAN NOT NULL,

    CONSTRAINT "IssueBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IssueMessage" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isRemoved" BOOLEAN NOT NULL,
    "blockId" INTEGER NOT NULL,
    "seq" INTEGER NOT NULL,
    "celebId" INTEGER NOT NULL,
    "celebName" TEXT NOT NULL,
    "celebDescription" TEXT,
    "celebAvatar" TEXT,
    "content" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "linkFrom" TEXT NOT NULL,
    "backgroundColor" TEXT NOT NULL,
    "bias" TEXT NOT NULL,
    "reportedAt" TEXT NOT NULL,

    CONSTRAINT "IssueMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Celeb" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "avatar" TEXT,

    CONSTRAINT "Celeb_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IssueCeleb" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IssueCeleb_AB_unique" ON "_IssueCeleb"("A", "B");

-- CreateIndex
CREATE INDEX "_IssueCeleb_B_index" ON "_IssueCeleb"("B");

-- AddForeignKey
ALTER TABLE "IssueBlock" ADD CONSTRAINT "IssueBlock_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IssueMessage" ADD CONSTRAINT "IssueMessage_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "IssueBlock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IssueCeleb" ADD CONSTRAINT "_IssueCeleb_A_fkey" FOREIGN KEY ("A") REFERENCES "Celeb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IssueCeleb" ADD CONSTRAINT "_IssueCeleb_B_fkey" FOREIGN KEY ("B") REFERENCES "Issue"("id") ON DELETE CASCADE ON UPDATE CASCADE;
