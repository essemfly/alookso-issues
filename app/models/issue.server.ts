import { Issue, IssueBlock, IssueMessage, IssueStatus, Celeb } from '@prisma/client';
import { prisma } from './db.server';
import { generateSlug } from '@/utils/slugGenerator';

export type IssueWithBlocks = Issue & {
  issueBlocks: IssueBlockWithMessages[];
  celebs: Celeb[];
};

export type IssueBlockWithMessages = IssueBlock & {
  messages: IssueMessage[];
};

export async function getIssue(slug: string) {
  return prisma.issue.findFirst({
    where: { slug },
    include: {
      issueBlocks: true,
      celebs: true,
    },
  });
}

// TODO: pagination
export async function getLiveIssues() {
  return prisma.issue.findMany({
    where: { status: IssueStatus.PUBLISHED },
    take: 100,
    orderBy: {
      createdAt: 'desc',
    },
  });
}

// TODO: pagination
export async function getAllIssues() {
  return prisma.issue.findMany({
    take: 100,
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function createIssue() {
  return await prisma.issue.create({
    data: {
      title: 'New Issue',
      slug: generateSlug(),
      description: 'New Issue',
      coverImage: 'https://via.placeholder.com/150',
      status: IssueStatus.DRAFT,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
}
