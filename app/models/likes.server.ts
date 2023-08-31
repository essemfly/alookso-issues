import { prisma } from './db.server';

export interface UpsertLikeInput {
  userId: string;
  messageId: number;
  evaluation: number;
}

export async function upsertMessageLike(input: UpsertLikeInput) {
  const { userId, messageId, evaluation } = input;
  const existingLike = await prisma.messageLike.findFirst({
    where: {
      userId,
      messageId,
    },
  });

  if (existingLike) {
    return await prisma.messageLike.update({
      where: {
        id: existingLike.id,
      },
      data: {
        evaluation,
      },
    });
  }

  const message = await prisma.issueMessage.findUnique({
    where: {
      id: messageId,
    },
  });

  return await prisma.messageLike.create({
    data: {
      userId,
      messageId,
      issueId: message!.issueId,
      evaluation,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
}
