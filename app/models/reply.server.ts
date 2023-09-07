import { prisma } from './db.server';

export interface UpsertReplyInput {
  userId: string;
  issueId: number;
  content: string;
}

export async function getReplys(issueId: number) {
  return await prisma.issueReply.findMany({
    where: {
      issueId: issueId,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 100,
  });
}

export async function createReply(input: UpsertReplyInput) {
  const { userId, issueId, content } = input;
  await prisma.issueReply.create({
    data: {
      issueId: issueId,
      userId: userId,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  return await prisma.issueReply.findMany({
    where: {
      issueId: issueId,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 100,
  });
}
