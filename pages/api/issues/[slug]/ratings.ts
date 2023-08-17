import { upsertRating } from '@/models/rating.server';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    let rating = upsertRating(req.body);
    res.status(200).json(rating);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
