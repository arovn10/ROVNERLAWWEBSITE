const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  // Admin user (for /admin/login)
  const adminEmail = 'arovner@dial-law.com';
  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('15Saratoga!', 10);
    await prisma.user.create({
      data: { email: adminEmail, password: hashedPassword, name: 'Admin User', role: 'admin' },
    });
    console.log('Added admin user (arovner@dial-law.com / 15Saratoga!)');
  }

  // Settings (firm name)
  const existing = await prisma.settings.findFirst();
  if (!existing) {
    await prisma.settings.create({ data: { firmName: 'Rovner, Allen, Rovner And Sigman' } });
    console.log('Added settings');
  }

  // Sample settlements
  const settlements = await prisma.settlement.findMany();
  if (settlements.length === 0) {
    await prisma.settlement.createMany({
      data: [
        { title: 'Auto Accident', description: 'Car collision settlement', amount: 250000, date: new Date(), caseType: 'Auto Accident' },
        { title: 'Slip and Fall', description: 'Premises liability', amount: 180000, date: new Date(), caseType: 'Premises Liability' },
        { title: 'Medical Malpractice', description: 'Surgical error', amount: 450000, date: new Date(), caseType: 'Medical Malpractice' },
      ],
    });
    console.log('Added sample settlements');
  }

  // Sample practice areas
  const areas = await prisma.practiceArea.findMany();
  if (areas.length === 0) {
    await prisma.practiceArea.createMany({
      data: [
        { title: 'Personal Injury', description: 'Fighting for injured clients', content: 'Content', slug: 'personal-injury', order: 0, active: true },
        { title: 'Auto Accidents', description: 'Car accident representation', content: 'Content', slug: 'auto-accidents', order: 1, active: true },
        { title: 'Medical Malpractice', description: 'Holding negligent providers accountable', content: 'Content', slug: 'medical-malpractice', order: 2, active: true },
      ],
    });
    console.log('Added sample practice areas');
  }

  console.log('Local seed complete');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
