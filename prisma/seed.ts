import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear all tables
  await prisma.user.deleteMany()
  await prisma.settlement.deleteMany()
  await prisma.news.deleteMany()
  await prisma.archive.deleteMany()
  await prisma.settings.deleteMany()
  await prisma.lawyer.deleteMany()

  // Seed only the Lawyer table with the listed lawyers
  await prisma.lawyer.createMany({
    data: [
      {
        active: true,
        bio: 'Senator Robert A. Rovner founded and served as Senior Partner in the Law Firm of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt from 1980 until 2021. In 1970, He was elected the youngest State Senator in Pennsylvania history representing Northeast Philadelphia and Bucks County.',
        education: 'State Senator in Pennsylvania history',
        email: 'info@dial-law.com',
        experience: 'Senior Partner from 1980 until 2021',
        image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/uploads/1749651822716-rrovner.png',
        name: 'Robert A. Rovner',
        order: 1,
        phone: '215-259-5958',
        specialties: 'Personal Injury, Civil Litigation',
        title: 'Founding Partner (1943-2021)',
      },
      {
        active: true,
        bio: 'Steven is the principal and managing attorney of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt. He was born in Philadelphia and a graduate of Lower Moreland High School (1985), The University of Pennsylvania (1989) and The University of Miami School of Law (1992).',
        education: 'The University of Miami School of Law (1992) The University of Pennsylvania (1989) Lower Moreland High School (1985)',
        email: 'srovner@dial-law.com',
        experience: 'Principal and managing attorney',
        image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/uploads/1749651681239-srovner.png',
        name: 'Steven L. Rovner',
        order: 2,
        phone: '215-259-5958',
        specialties: 'Personal Injury, Auto Accidents, Medical Malpractice',
        title: 'Principal and Managing Attorney',
      },
      {
        active: true,
        bio: 'Bruce S. Allen Juris Doctor degree (May 1976) from Delaware Law School of Widener University; Bachelor of Science degree (May 1973) from Philadelphia University. Admitted to practice law in Pennsylvania, Federal District Court for the Eastern District of Pennsylvania and before the United States Supreme Court.',
        education: 'Delaware Law School of Widener University (1976) Philadelphia University (1973)',
        email: 'ballen@dial-law.com',
        experience: 'Admitted to practice law in Pennsylvania, Federal District Court for the Eastern District of Pennsylvania and before the United States Supreme Court',
        image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/uploads/1749652005232-bruce_s.jpg',
        name: 'Bruce S. Allen',
        order: 3,
        phone: '215-259-5958',
        specialties: 'Personal Injury, Products Liability',
        title: 'Partner',
      },
      {
        active: true,
        bio: 'NE High School 1972 Graduated Temple University 1976 – BBA-Business Administration – Major in Business Law and Industrial Relations Delaware Law School of Widener University January 1980 – Juris Doctor.',
        education: 'Delaware Law School of Widener University (1980) Temple University (1976) NE High School (1972)',
        email: 'hrovner@dial-law.com',
        experience: 'Partner at Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt',
        image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/uploads/1749652027354-hrovner.png',
        name: 'Howard P. Rovner',
        order: 4,
        phone: '215-259-5958',
        specialties: "Workers' Compensation, Business Law",
        title: 'Partner',
      },
      {
        active: true,
        bio: 'Jeffrey Allen Sigman focuses on family law, divorce, and custody matters. He provides compassionate representation during difficult family situations.',
        education: 'Juris Doctor',
        email: 'jsigman@dial-law.com',
        experience: 'Extensive experience in family law',
        image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/uploads/1749652096141-jsigman.png',
        name: 'Jeffrey Allen Sigman',
        order: 6,
        phone: '215-259-5958',
        specialties: 'Family Law, Divorce, Custody',
        title: 'Partner',
      },
      {
        active: true,
        bio: 'Joseph S. Lukomski handles personal injury cases and civil litigation.',
        education: 'Juris Doctor',
        email: 'jlukomski@dial-law.com',
        experience: 'Experience in personal injury and civil litigation',
        image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/lawyers/joseph-lukomski.jpg',
        name: 'Joseph S. Lukomski',
        order: 11,
        phone: '215-259-5958',
        specialties: 'Personal Injury, Civil Litigation',
        title: 'Attorney',
      },
      {
        active: true,
        bio: 'Cheryl B. Wolf specializes in personal injury law and client advocacy.',
        education: 'Juris Doctor',
        email: 'cwolf@dial-law.com',
        experience: 'Experience in personal injury law',
        image: 'https://rovnerlawbucket.s3.us-east-1.amazonaws.com/uploads/1749682898602-cwolf.png',
        name: 'Cheryl B. Wolf (of counsel)',
        order: 12,
        phone: '215-259-5958',
        specialties: 'Personal Injury, Client Advocacy',
        title: 'Attorney',
      },
    ]
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 