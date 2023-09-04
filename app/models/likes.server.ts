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
    if (existingLike.evaluation === evaluation) {
      if (evaluation === 1) {
        await prisma.issueMessage.update({
          where: {
            id: messageId,
          },
          data: {
            likeCount: {
              decrement: 1,
            },
          },
        });
      } else {
        await prisma.issueMessage.update({
          where: {
            id: messageId,
          },
          data: {
            likeCount: {
              increment: 1,
            },
          },
        });
      }
      return await prisma.messageLike.delete({
        where: {
          id: existingLike.id,
        },
      });
    }

    if (evaluation === 1) {
      await prisma.issueMessage.update({
        where: {
          id: messageId,
        },
        data: {
          likeCount: {
            increment: 2,
          },
        },
      });
    } else {
      await prisma.issueMessage.update({
        where: {
          id: messageId,
        },
        data: {
          likeCount: {
            decrement: 2,
          },
        },
      });
    }

    
    return await prisma.messageLike.update({
      where: {
        id: existingLike.id,
      },
      data: {
        evaluation,
      },
    });
  }

  const message = await prisma.issueMessage.update({
    where: {
      id: messageId,
    },
    data: {
      likeCount: {
        increment: evaluation === 1 ? 1 : -1,
      },
    }
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
