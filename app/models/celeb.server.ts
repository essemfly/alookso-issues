import { prisma } from './db.server';

export async function getCelebs() {
  return prisma.celeb.findMany({
    take: 100,
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function getCelebsByIssue(issueSlug: string) {
  return prisma.celeb.findMany({
    where: {
      issues: {
        some: {
          slug: issueSlug,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function addCelebToIssue(celebId: number, issueId: number) {
  return prisma.celeb.update({
    where: {
      id: celebId,
    },
    data: {
      issues: {
        connect: {
          id: issueId,
        },
      },
    },
  });
}

export async function removeCelebToIssue(celebId: number, issueId: number) {
  return prisma.celeb.update({
    where: {
      id: celebId,
    },
    data: {
      issues: {
        disconnect: {
          id: issueId,
        },
      },
    },
  });
}

export interface CreateCelebInput {
  name: string;
  description: string;
  avatar: string;
}

export async function createCeleb(input: CreateCelebInput) {
  return prisma.celeb.create({
    data: {
      name: input.name,
      description: input.description,
      avatar: input.avatar,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
}
