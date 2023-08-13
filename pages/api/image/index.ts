import { NextApiRequest, NextApiResponse } from 'next';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3Client } from '@/lib/s3Client';

import multer from 'multer';
export const config = {
  api: {
    bodyParser: false,
  },
};

const PUBLIC_S3_URL = 'https://alookso-issues.s3.ap-northeast-2.amazonaws.com/';
const upload = multer();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      upload.single('file')(req, res, async (err) => {
        if (err) {
          console.error('Error uploading file:', err);
          return res.status(400).json({ error: 'Error uploading file' + err });
        }

        const file = req.file;

        if (!file) {
          return res.status(400).json({ error: 'No file provided' });
        }

        const uploadParams = {
          Bucket: process.env.S3_BUCKET_NAME,
          Key: file.originalname,
          ContentType: file.mimetype,
          Body: file.buffer, // 파일의 내용을 Body에 넣어 업로드
        };

        const uploadCommand = new PutObjectCommand(uploadParams);

        try {
          const results = await s3Client.send(uploadCommand);
          res.status(200).json({
            message: 'File uploaded successfully',
            result: results,
            url: PUBLIC_S3_URL + file.originalname,
          });
        } catch (error) {
          console.error('S3 upload error:', error);
          res.status(500).json({ error: 'S3 upload error' });
        }
      });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
