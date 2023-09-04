import { getReplys, createReply, UpsertReplyInput } from '@/models/reply.server';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    let createReplyInput : UpsertReplyInput= JSON.parse(req.body)
    let reply = createReply(createReplyInput);
    res.status(200).json(reply);
  } else if (req.method == 'GET') {
    let replys = await getReplys(req.body);
    res.status(200).json(replys);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
