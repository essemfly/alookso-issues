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

  return await prisma.messageLike.create({
    data: {
      userId,
      messageId,
      evaluation,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
}
