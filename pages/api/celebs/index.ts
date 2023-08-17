import { createCeleb, getCelebs } from '@/models/celeb.server';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const celebs = getCelebs();
    res.status(200).json(celebs);
  } else if (req.method === 'POST') {
    const newCeleb = await createCeleb(req.body);
    res.status(200).json(newCeleb);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
