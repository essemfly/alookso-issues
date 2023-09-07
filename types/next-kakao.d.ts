import { User } from '@prisma/client';
import NextAuth from 'next-auth';

declare global {
  interface Window {
    Kakao: any;
  }
}
