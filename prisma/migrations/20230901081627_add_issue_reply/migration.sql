-- CreateTable
CREATE TABLE "IssueReply" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "issueId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "likeCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "IssueReply_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IssueReply" ADD CONSTRAINT "IssueReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IssueReply" ADD CONSTRAINT "IssueReply_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
