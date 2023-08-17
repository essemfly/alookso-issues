import { prisma } from './db.server';

export async function getUserById(id: string) {
  return prisma.user.findUnique({ where: { id } });
}