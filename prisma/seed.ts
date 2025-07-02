const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { awsConfig } = require('../src/lib/aws-config');

const s3Client = new S3Client({
  region: awsConfig.region,
  credentials: {
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
  },
});

async function uploadToS3(filePath: string, key: string) {
  const fileContent = fs.readFileSync(filePath);
  const contentType = 'image/jpeg';
  const command = new PutObjectCommand({
    Bucket: awsConfig.bucketName,
    Key: key,
    Body: fileContent,
    ContentType: contentType,
    ACL: 'public-read',
  });
  await s3Client.send(command);
  return `https://${awsConfig.bucketName}.s3.${awsConfig.region}.amazonaws.com/${key}`;
}

async function seedRovnerArchives() {
  const archiveDir = path.join(__dirname, '../public/photos/BobRovnerArchives');
  const files = fs.readdirSync(archiveDir).filter((f: string) => f.endsWith('.jpg'));
  for (const file of files) {
    const filePath = path.join(archiveDir, file);
    const s3Key = `archives/${file}`;
    const s3Url = await uploadToS3(filePath, s3Key);
    const title = file.replace(/\.[^/.]+$/, '');
    await prisma.archive.upsert({
      where: { title },
      update: {
        title,
        imageUrl: s3Url,
        content: '',
        date: new Date('2000-01-01'),
        category: 'Photo',
      },
      create: {
        title,
        imageUrl: s3Url,
        content: '',
        date: new Date('2000-01-01'),
        category: 'Photo',
      },
    });
    console.log(`Seeded archive: ${title}`);
  }
}

async function main() {
  await seedRovnerArchives();
  console.log('Seeded Bob Rovner Archives to S3!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 