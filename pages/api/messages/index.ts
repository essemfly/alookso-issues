import { upsertMessageLike } from '@/models/likes.server';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    let message = upsertMessageLike(req.body);
    res.status(200).json(message);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
