import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getServerSession } from 'next-auth/next';
import { awsConfig } from '@/lib/aws-config';
import { authOptions } from '@/lib/auth';

const s3Client = new S3Client({
  region: awsConfig.region,
  credentials: {
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
  },
});

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file');
    if (!file || typeof file !== 'object' || !('arrayBuffer' in file)) {
      console.error('No file provided in formData or file is not a valid upload object');
      return NextResponse.json({ error: 'No file provided or invalid file type' }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(buffer);

    // Generate a unique filename
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}-${file.name.replace(/\s+/g, '-')}`;
    const key = `uploads/${uniqueFileName}`;

    // Upload to S3
    await s3Client.send(new PutObjectCommand({
      Bucket: awsConfig.bucketName,
      Key: key,
      Body: fileBuffer,
      ContentType: file.type,
      ACL: 'public-read',
    }));

    // Construct the public URL
    const url = `https://${awsConfig.bucketName}.s3.${awsConfig.region}.amazonaws.com/${key}`;

    return NextResponse.json({ url });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json({ error: 'Failed to upload image', details: String(error) }, { status: 500 });
  }
} 