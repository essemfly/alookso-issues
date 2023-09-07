import NextAuth, { Session } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
      checks: ['none'],
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // async session(session: Session) {
    //   return {
    //     session,
    //     user: session.user
    //   };
    // },
  },
};

/* eslint-disable */
//@ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
export default NextAuth(authOptions);
