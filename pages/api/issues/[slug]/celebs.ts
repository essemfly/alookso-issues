import { addCelebToIssue, removeCelebToIssue } from '@/models/celeb.server';
import { getIssue } from '@/models/issue.server';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { celebId } = req.body;
    const { slug } = req.query;

    let issue = await getIssue(slug as string);
    if (!issue) {
      res.status(404).end(); // Not Found
      return;
    }

    let isRemoved = false;

    issue.celebs!!.forEach(async (celeb) => {
      if (celeb.id === celebId) {
        await removeCelebToIssue(celebId, issue!!.id!!);
        isRemoved = true;
      }
    });

    if (!isRemoved) {
      await addCelebToIssue(celebId, issue!!.id!!);
    }

    issue = await getIssue(slug as string);
    res.status(200).json(issue?.celebs);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
