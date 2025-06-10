export const awsConfig = {
    bucketName: process.env.AWS_BUCKET_NAME || '',
    region: process.env.AWS_REGION || '',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
};

// Validate AWS configuration
if (!awsConfig.bucketName || !awsConfig.region || !awsConfig.accessKeyId || !awsConfig.secretAccessKey) {
    console.warn('AWS configuration is incomplete. Please check your environment variables.');
} 