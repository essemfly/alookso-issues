import { createIssue } from '@/models/issue.server';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
  } else if (req.method === 'POST') {
    let newIssue = await createIssue();
    res.status(200).json(newIssue);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
