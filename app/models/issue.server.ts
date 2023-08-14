import {
  Issue,
  IssueBlock,
  IssueMessage,
  IssueStatus,
  Celeb,
  Bias,
} from '@prisma/client';
import { prisma } from './db.server';
import { generateSlug } from '@/utils/slugGenerator';

export type IssueWithCelebs = Issue & {
  celebs: Celeb[];
};

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
      issueBlocks: {
        where: { isRemoved: false },
        include: {
          messages: {
            where: { isRemoved: false },
          },
        },
      },
      celebs: true,
    },
  });
}

// TODO: pagination
export async function getLiveIssues() {
  return prisma.issue.findMany({
    where: { status: IssueStatus.PUBLISHED },
    take: 100,
    include: {
      celebs: true,
    },
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

export interface UpdateIssueInput {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  status: IssueStatus;
  blocks: UpdateIssueBlockInput[];
}

export interface UpdateIssueBlockInput {
  id?: number;
  seq: number;
  blockType: string;
  content: string;
  messages: UpdateIssueMessageInput[];
  isRemoved: boolean;
}

export interface UpdateIssueMessageInput {
  celebId: number;
  celebName: string;
  celebDescription: string;
  celebAvatar: string;
  content: string;
  link: string;
  linkFrom: string;
  backgroundColor: string;
  bias: Bias;
  reportedAt: string;
}

export async function updateIssue(input: UpdateIssueInput) {
  await removeIssueBlocks(input.id);

  input.blocks.map(async (block) => {
    if (block.id) {
      return await prisma.issueBlock.update({
        where: {
          id: block.id,
        },
        data: {
          seq: block.seq,
          blockType: block.blockType,
          content: block.content,
          isRemoved: false,
          updatedAt: new Date(),
          messages: {
            createMany: {
              data: block.messages.map((message) => {
                return {
                  celebId: message.celebId,
                  celebName: message.celebName,
                  celebDescription: message.celebDescription,
                  celebAvatar: message.celebAvatar,
                  content: message.content,
                  link: message.link,
                  linkFrom: message.linkFrom,
                  backgroundColor: message.backgroundColor,
                  bias: message.bias,
                  reportedAt: message.reportedAt,
                  isRemoved: false,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                };
              }),
            },
          },
        },
      });
    } else {
      return await prisma.issueBlock.create({
        data: {
          seq: block.seq,
          blockType: block.blockType,
          content: block.content,
          isRemoved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          issueId: input.id,
          messages: {
            createMany: {
              data: block.messages.map((message) => {
                return {
                  celebId: message.celebId,
                  celebName: message.celebName,
                  celebDescription: message.celebDescription,
                  celebAvatar: message.celebAvatar,
                  content: message.content,
                  link: message.link,
                  linkFrom: message.linkFrom,
                  backgroundColor: message.backgroundColor,
                  bias: message.bias,
                  reportedAt: message.reportedAt,
                  isRemoved: false,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                };
              }),
            },
          },
        },
      });
    }
  });

  return await prisma.issue.update({
    include: {
      issueBlocks: {
        where: { isRemoved: false },
        include: {
          messages: {
            where: { isRemoved: false },
          },
        },
      },
    },
    where: {
      id: input.id,
    },
    data: {
      title: input.title,
      description: input.description,
      coverImage: input.coverImage,
      status: input.status,
      updatedAt: new Date(),
    },
  });
}
async function removeIssueBlocks(issueId: number) {
  await prisma.issueBlock.updateMany({
    where: {
      issueId,
    },
    data: {
      isRemoved: true,
    },
  });

  const issueBlocksToUpdate = await prisma.issueBlock.findMany({
    where: {
      issueId,
    },
  });

  const updatePromises = issueBlocksToUpdate.map(async (block) => {
    await prisma.issueMessage.updateMany({
      where: { blockId: block.id },
      data: { isRemoved: true },
    });
  });

  await Promise.all(updatePromises);
}
