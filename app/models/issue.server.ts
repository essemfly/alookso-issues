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
  messages: IssueMessageWithoutId[];
};

export type IssueMessageWithoutId = Omit<IssueMessage, 'id'> & {
  id?: number;
}

export type IssueMessageWithLikes = IssueMessage & {
  likeCount: number;
  dislikeCount: number;
}

export async function getMessageWithLikes(messageId: number) {
  const message = await prisma.issueMessage.findFirst({
    where: { id: messageId },
  });
  
  const likeCount = await prisma.messageLike.count({
    where: {
      messageId: messageId,
      evaluation: 1,
    },
  });

  const dislikeCount = await prisma.messageLike.count({
    where: {
      messageId: messageId,
      evaluation: -1,
    },
  });

  return {
    ...message,
    likeCount,
    dislikeCount,
  };
}


export async function getIssue(slug: string) {
  return prisma.issue.findFirst({
    where: { slug },
    include: {
      issueBlocks: {
        orderBy: {
          seq: 'asc',
        },
        where: { isRemoved: false },
        include: {
          messages: {
            where: { isRemoved: false },
            orderBy: {
              createdAt: 'asc',
            },
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
  id?: number;
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
      await updateIssueBlock(block);
    } else {
      await createIssueBlock(block, input.id);
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

async function updateIssueMessage(block: UpdateIssueBlockInput) {
  console.log("remove issue messages of block: ", block.id!!)
  await removeIssueMessages(block.id!!);

  block.messages.map(async (message) => {
    if (message.id) {
      await prisma.issueMessage.update({
        where: {
          id: message.id,
        },
        data: {
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
          updatedAt: new Date(),
        },
      });
    } else {
      await prisma.issueMessage.create({
        data: {
          blockId: block.id!!,
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
        },
      });
    }
  });
}

async function createIssueBlock(block: UpdateIssueBlockInput, issueId: number) {
  await prisma.issueBlock.create({
    data: {
      seq: block.seq,
      blockType: block.blockType,
      content: block.content,
      isRemoved: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      issueId: issueId,
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

async function updateIssueBlock(block: UpdateIssueBlockInput) {
  if (block.blockType === 'message') {
    await updateIssueMessage(block);
  }

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
}

async function removeIssueMessages(blockId: number) {
  let x = await prisma.issueMessage.updateMany({
    where: {
      blockId: blockId,
    },
    data: {
      isRemoved: true,
    },
  });
  console.log("x: ", x)
}
