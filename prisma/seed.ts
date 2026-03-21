const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { awsConfig } = require('../src/lib/aws-config.cjs.js');

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

async function seedArchives() {
  console.log('Seeding Bob Rovner Archives...');
  
  // Clear existing archives first
  await prisma.archive.deleteMany({});
  console.log('Cleared existing archives');
  
  const archiveDir = path.join(__dirname, '../public/photos/BobRovnerArchives');
  const files = fs.readdirSync(archiveDir).filter((f: string) => f.endsWith('.jpg'));
  const rovnerPhotos = [
    { file: 'BUSH2.jpg', category: 'Presidents', description: 'Bob Rovner with President George H.W. Bush' },
    { file: 'CLINTON1-230x300.jpg', category: 'Presidents', description: 'Bob Rovner with President Bill Clinton' },
    { file: 'CLINTON2.jpg', category: 'Presidents', description: 'Bob Rovner with President Bill Clinton' },
    { file: 'REAGAN.jpg', category: 'Presidents', description: 'Bob Rovner with President Ronald Reagan' },
    { file: 'doc03613020170208103844_001-1024x791.jpg', category: 'Presidents', description: 'FORMER STATE SENATOR BOB ROVNER TOLD BARACK OBAMA HE ENJOYED BEING A DELEGATE IN 2008 AT THE DENVER DEMOCRATIC CONVENTION AND AGAIN IN CHARLOTTE IN 2012' },
    { file: 'bobrovner1.jpg', category: 'Presidents', description: 'Bob Rovner with President Donald J. Trump' },
    { file: 'SPECTER.jpg', category: 'Senate & Politicians', description: 'With Senator Arlen Specter' },
    { file: 'GORE.jpg', category: 'Senate & Politicians', description: 'With Vice President Al Gore' },
    { file: 'mccain.jpg', category: 'Senate & Politicians', description: 'With Senator John McCain' },
    { file: 'POWELL.jpg', category: 'Senate & Politicians', description: 'With General Colin Powell' },
    { file: 'BENNET.jpg', category: 'Senate & Politicians', description: 'With Senator Bill Bennett' },
    { file: 'ABRAHAM.jpg', category: 'Senate & Politicians', description: '' },
    { file: 'BOXER.jpg', category: 'Senate & Politicians', description: 'With Senator Barbara Boxer' },
    { file: 'STONE.jpg', category: 'Senate & Politicians', description: '' },
    { file: 'STREET.jpg', category: 'Senate & Politicians', description: 'With Mayor John Street' },
    { file: 'ridge.jpg', category: 'Senate & Politicians', description: 'With Governor Tom Ridge' },
    { file: 'arnold.jpg', category: 'Senate & Politicians', description: 'With Arnold Schwarzenegger' },
    { file: 'rendell2.jpg', category: 'Senate & Politicians', description: 'With Governor Ed Rendell' },
    { file: 'rendell3.jpg', category: 'Senate & Politicians', description: 'With Governor Ed Rendell' },
    { file: 'doc03613420170208104216_001-1024x791.jpg', category: 'Senate & Politicians', description: 'Bob Rovner with Hillary Clinton' },
    { file: 'bonjovi.jpg', category: 'Celebrities', description: 'With Jon Bon Jovi' },
    { file: 'hanks.jpg', category: 'Celebrities', description: 'With Tom Hanks' },
    { file: 'king.jpg', category: 'Celebrities', description: 'With Larry King' },
    { file: 'jagger.jpg', category: 'Celebrities', description: 'With Mick Jagger' },
    { file: 'streisnd.jpg', category: 'Celebrities', description: 'With Barbra Streisand' },
    { file: 'minelli-271x300.jpg', category: 'Celebrities', description: 'With Liza Minnelli' },
    { file: 'whoopi.jpg', category: 'Celebrities', description: 'With Whoopi Goldberg' },
    { file: 'cosby2.jpg', category: 'Celebrities', description: 'With Bill Cosby' },
    { file: 'COSBY.jpg', category: 'Celebrities', description: 'With Bill Cosby' },
    { file: 'doc03613220170208104114_001-1024x663.jpg', category: 'Archives', description: 'BOB ROVNER MEETS WITH THE FOUNDING FATHER OF THE STATE OF ISRAEL AND PRIME MINISTER DAVID BEN GURION IN 1971 WHEN HE WAS THE SENATOR AND TOLD THE PRIME MINISTER THAT HE WAS THE "GEORGE WASHINGTON" OF ISRAEL AND THANKED HIM FOR ALL HE DID FOR THE JEWISH PEOPLE' },
    { file: 'doc03613120170208103956_001-1024x791.jpg', category: 'Archives', description: '' },
    { file: 'doc03613320170208104158_001-791x1024.jpg', category: 'Archives', description: '' },
    { file: 'KENNEDY.jpg', category: 'Archives', description: '' },
    { file: 'johnson.jpg', category: 'Archives', description: '' },
  ];
  for (const file of files) {
    const filePath = path.join(archiveDir, file);
    const s3Key = `archives/${file}`;
    const s3Url = await uploadToS3(filePath, s3Key);
    const title = file.replace(/\.[^/.]+$/, '');
    const photoMeta = rovnerPhotos.find(p => p.file === file);
    await prisma.archive.create({
      data: {
        title: photoMeta?.description || title,
        imageUrl: s3Url,
        date: new Date('2000-01-01'),
        category: photoMeta?.category || 'Photo',
      },
    });
    console.log(`Seeded archive: ${title}`);
  }
}

async function main() {
  await seedArchives();
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