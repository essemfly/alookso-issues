import { updateIssue } from '@/models/issue.server';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Handle Get one functionality
  } else if (req.method === 'PUT') {
    let updatedIssue = await updateIssue(req.body);
    res.status(200).json(updatedIssue);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
