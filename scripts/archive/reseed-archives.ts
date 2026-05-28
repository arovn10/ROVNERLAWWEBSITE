const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function reseedArchives() {
  try {
    // Clear existing archives
    console.log('Clearing existing archives...');
    await prisma.archive.deleteMany({});
    console.log('Archives cleared successfully!');
    
    // Re-run the seed script
    console.log('Re-seeding archives...');
    require('../prisma/seed.ts');
    
  } catch (error) {
    console.error('Error reseeding archives:', error);
  } finally {
    await prisma.$disconnect();
  }
}

reseedArchives(); 