import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { awsConfig } from './aws-config';

const s3Client = new S3Client({
    region: awsConfig.region,
    credentials: {
        accessKeyId: awsConfig.accessKeyId,
        secretAccessKey: awsConfig.secretAccessKey,
    },
});

export async function uploadToS3(file: File, key: string): Promise<string> {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const command = new PutObjectCommand({
            Bucket: awsConfig.bucketName,
            Key: key,
            Body: buffer,
            ContentType: file.type,
            ACL: 'public-read',
        });

        await s3Client.send(command);

        // Return the public URL for the uploaded file
        return `https://${awsConfig.bucketName}.s3.${awsConfig.region}.amazonaws.com/${key}`;
    } catch (error) {
        console.error('Error uploading to S3:', error);
        throw new Error('Failed to upload file to S3');
    }
}

export async function uploadLawyerPhoto(file: File, lawyerName: string): Promise<string> {
    // Sanitize the lawyer name for the file name
    const sanitizedName = lawyerName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const fileExtension = file.name.split('.').pop();
    const key = `lawyers/${sanitizedName}.${fileExtension}`;

    return uploadToS3(file, key);
} 