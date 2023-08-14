import { addCelebToIssue, removeCelebToIssue } from '@/models/celeb.server';
import { getIssue } from '@/models/issue.server';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { celebId } = req.body;
    const { issueSlug } = req.query;

    let issue = await getIssue(issueSlug as string);
    if (!issue) {
      res.status(404).end(); // Not Found
      return;
    }

    issue.celebs.forEach((celeb) => async () => {
      if (celeb.id === celebId) {
        let celebsInIssue = await removeCelebToIssue(celebId, issue!!.id);
        res.status(200).json(celebsInIssue);
        return;
      }
    });
    let celebsInIssue = await addCelebToIssue(celebId, issue!!.id);
    res.status(200).json(celebsInIssue);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
