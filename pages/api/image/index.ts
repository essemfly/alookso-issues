import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import AWS from "aws-sdk";

// AWS S3 설정
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Multer 설정
const upload = multer({ dest: "uploads/" });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      upload.single("image")(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: "Error uploading file" });
        }

        const file = req.file;

        if (!file) {
          return res.status(400).json({ error: "No file provided" });
        }

        const params = {
          Bucket: process.env.S3_BUCKET_NAME,
          Key: file.filename,
          Body: file.buffer,
        };

        const uploadedFile = await s3.upload(params).promise();

        // 업로드 성공 시
        return res.status(200).json({
          success: true,
          message: "File uploaded successfully",
          uploadedUrl: uploadedFile.Location,
        });
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
