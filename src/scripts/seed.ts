import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@rovnerlaw.com' },
    update: {},
    create: {
      email: 'admin@rovnerlaw.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
    },
  });

  console.log('Created admin user:', admin.email);

  // Create sample lawyers based on the original website
  const lawyers = [
    {
      name: 'Steven L. Rovner',
      title: 'Principal and Managing Attorney',
      bio: 'Steven is the principal and managing attorney of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt. He was born in Philadelphia and a graduate of Lower Moreland High School (1985), The University of Pennsylvania (1989) and The University of Miami School of Law (1992). Steven has developed a notable reputation in Pennsylvania and other jurisdictions as a tough and determined litigator of personal injury type cases.',
      education: 'University of Pennsylvania (1989), University of Miami School of Law (1992)',
      experience: 'Over 19 years of experience, personally won and collected verdicts and settlements for clients in excess of $50,000,000',
      specialties: 'Civil litigation, personal injury, employment law, social security disability, real estate, landlord tenant matters, criminal defense, domestic/family matters, medical malpractice, products liability',
      email: 'srovner@dial-law.com',
      phone: '215-259-5958',
      order: 1,
      active: true,
    },
    {
      name: 'Bruce S. Allen',
      title: 'Partner',
      bio: 'Bruce S. Allen received his Juris Doctor degree (May 1976) from Delaware Law School of Widener University and Bachelor of Science degree (May 1973) from Philadelphia University. He has been a Partner in Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman and Schmidt since 1979.',
      education: 'Delaware Law School of Widener University (JD 1976), Philadelphia University (BS 1973)',
      experience: 'Admitted to practice law in Pennsylvania, Federal District Court for the Eastern District of Pennsylvania and before the United States Supreme Court',
      specialties: 'General practice, business law, civil litigation',
      order: 2,
      active: true,
    },
    {
      name: 'Howard P. Rovner',
      title: 'Partner',
      bio: 'Howard P. Rovner graduated from Temple University (1976) with a BBA in Business Administration, majoring in Business Law and Industrial Relations, and received his Juris Doctor from Delaware Law School of Widener University (January 1980).',
      education: 'Temple University (BBA 1976), Delaware Law School of Widener University (JD 1980)',
      experience: 'Practice of Law since 1980 with main office at 175 Bustleton Pike, Feasterville, PA',
      specialties: 'Workers\' Compensation, Domestic Relations, Family Law, divorce, support, custody, adoptions',
      order: 3,
      active: true,
    },
    {
      name: 'Jeffrey I. Zimmerman',
      title: 'Senior Litigation Partner',
      bio: 'Jeffrey I. Zimmerman is the firm\'s senior litigation partner, bringing his over 35 years of experience to the position. He is a 1979 graduate of the Dickinson School of Law and a graduate of the American Trial Lawyers Association National College of Advocacy.',
      education: 'Dickinson School of Law (1979), LaSalle University (1976), Central High School (1972)',
      experience: 'Over 35 years of experience in personal injury litigation, handled thousands of personal injury cases, winning settlements, verdicts and awards amounting to tens of millions of dollars',
      specialties: 'Personal injury litigation, major injury and death claims, motor vehicle and premises cases, work place injuries, nursing home negligence, motorcycle and truck cases',
      order: 4,
      active: true,
    },
    {
      name: 'Jeffrey Allen Sigman',
      title: 'Partner',
      bio: 'Jeffrey Allen Sigman graduated from Temple University (BA 1983) and Temple University School of Law (JD 1986). He is admitted to practice by the Supreme Court of Pennsylvania and the United States District Court for the Eastern District of Pennsylvania.',
      education: 'Temple University (BA 1983), Temple University School of Law (JD 1986)',
      experience: 'Admitted to practice 1986, member of Pennsylvania Association of Criminal Defense Lawyers, Philadelphia Trial Lawyers Association',
      specialties: 'Civil litigation, personal injury, criminal defense',
      order: 5,
      active: true,
    },
    {
      name: 'Cheryl B. Wolf',
      title: 'Associate',
      bio: 'Cheryl B. Wolf graduated from LaSalle University (BA 1983) and American University-Washington College of Law (JD 1986). She is a member of the American Bar Association.',
      education: 'LaSalle University (BA 1983), American University-Washington College of Law (JD 1986)',
      experience: 'Admitted to practice by Supreme Court of Pennsylvania (1986), Supreme Court of New Jersey (1987), US District Courts',
      specialties: 'Civil litigation, personal injury, landlord-tenant, contract and business litigation',
      order: 6,
      active: true,
    }
  ];

  // Clear existing lawyers and create new ones
  await prisma.lawyer.deleteMany({});
  for (const lawyerData of lawyers) {
    const lawyer = await prisma.lawyer.create({
      data: lawyerData,
    });
    console.log('Created lawyer:', lawyer.name);
  }

  // Create sample settlements
  const settlements = [
    {
      title: 'Limited Tort Auto Accident Settlement',
      description: 'Client with limited tort coverage in minor car accident case',
      amount: '$300,000',
      caseType: 'Auto Accident',
      year: 2023,
      featured: true,
      order: 1,
    },
    {
      title: 'Premises Liability Settlement',
      description: 'Property owner liability case for injuries caused by unsafe conditions',
      amount: '$90,000',
      caseType: 'Premises Liability',
      year: 2023,
      featured: true,
      order: 2,
    },
    {
      title: 'Medical Malpractice Verdict',
      description: 'Successful medical malpractice case resulting in significant compensation',
      amount: '$750,000',
      caseType: 'Medical Malpractice',
      year: 2022,
      featured: true,
      order: 3,
    },
    {
      title: 'Truck Accident Settlement',
      description: 'Major truck accident case with serious injuries',
      amount: '$1,200,000',
      caseType: 'Truck Accident',
      year: 2022,
      featured: true,
      order: 4,
    },
    {
      title: 'Workers\' Compensation Settlement',
      description: 'Workplace injury case with ongoing medical needs',
      amount: '$450,000',
      caseType: 'Workers\' Compensation',
      year: 2023,
      featured: false,
      order: 5,
    }
  ];

  // Clear existing settlements and create new ones
  await prisma.settlement.deleteMany({});
  for (const settlementData of settlements) {
    const settlement = await prisma.settlement.create({
      data: settlementData,
    });
    console.log('Created settlement:', settlement.title);
  }

  console.log('Database seeded successfully!');
  console.log('Admin login: admin@rovnerlaw.com / admin123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 