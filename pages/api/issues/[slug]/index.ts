import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Handle Get one functionality
  } else if (req.method === 'PUT') {
    // Handle Edit functionality
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
