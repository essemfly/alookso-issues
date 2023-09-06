import NextAuth, { Session } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
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
    async session(session: Session) {
      return {
        session,
        user: session.user as User,
      };
    },
    // async signIn() {
    //   console.log("signIn finished?")
    //   const isAllowedToSignIn = true;
    //   if (isAllowedToSignIn) {
    //     return true;
    //   } else {
    //     // Return false to display a default error message
    //     return false;
    //     // Or you can return a URL to redirect to:
    //     // return '/unauthorized'
    //   }
    // },
  },
};

/* eslint-disable */
//@ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
export default NextAuth(authOptions);
