import { prisma } from './db.server';

export interface UpsertRatingInput {
  userId: string;
  issueId: number;
  rating: number;
}

export async function upsertRating(input: UpsertRatingInput) {
  const { userId, issueId, rating } = input;
  const existingRating = await prisma.rating.findFirst({
    where: {
      userId,
      issueId,
    },
  });

  if (existingRating) {
    if (existingRating.rating === rating) {
      return await prisma.rating.delete({
        where: {
          id: existingRating.id,
        },
      });
    }
    
    return await prisma.rating.update({
      where: {
        id: existingRating.id,
      },
      data: {
        rating,
      },
    });
  }

  return await prisma.rating.create({
    data: {
      issueId,
      userId,
      rating,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
}
