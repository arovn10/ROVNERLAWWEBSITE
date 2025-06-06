import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.lawyer.deleteMany()
  await prisma.settlement.deleteMany()

  // Create lawyers from dial-law.com
  const lawyers = await prisma.lawyer.createMany({
    data: [
      {
        name: "Robert A. Rovner",
        title: "Founding Partner (1943-2021)",
        bio: "Senator Robert A. Rovner founded and served as Senior Partner in the Law Firm of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt from 1980 until 2021. In 1970, He was elected the youngest State Senator in Pennsylvania history representing Northeast Philadelphia and Bucks County.",
        email: "info@dial-law.com",
        phone: "215-259-5958",
        specialties: "Personal Injury, Civil Litigation"
      },
      {
        name: "Steven L. Rovner",
        title: "Principal and Managing Attorney",
        bio: "Steven is the principal and managing attorney of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt. He was born in Philadelphia and a graduate of Lower Moreland High School (1985), The University of Pennsylvania (1989) and The University of Miami School of Law (1992).",
        email: "srovner@dial-law.com",
        phone: "215-259-5958",
        specialties: "Personal Injury, Auto Accidents, Medical Malpractice"
      },
      {
        name: "Bruce S. Allen",
        title: "Partner",
        bio: "Bruce S. Allen Juris Doctor degree (May 1976) from Delaware Law School of Widener University; Bachelor of Science degree (May 1973) from Philadelphia University. Admitted to practice law in Pennsylvania, Federal District Court for the Eastern District of Pennsylvania and before the United States Supreme Court.",
        email: "ballen@dial-law.com",
        phone: "215-259-5958",
        specialties: "Personal Injury, Products Liability"
      },
      {
        name: "Howard P. Rovner",
        title: "Partner",
        bio: "NE High School 1972 Graduated Temple University 1976 – BBA-Business Administration – Major in Business Law and Industrial Relations Delaware Law School of Widener University January 1980 – Juris Doctor.",
        email: "hrovner@dial-law.com",
        phone: "215-259-5958",
        specialties: "Workers' Compensation, Business Law"
      },
      {
        name: "Jeffrey I. Zimmerman",
        title: "Partner",
        bio: "Jeffrey I. Zimmerman specializes in personal injury law, workers' compensation, and employment matters. He brings extensive experience in representing injured parties and ensuring they receive proper compensation.",
        email: "jzimmerman@dial-law.com",
        phone: "215-259-5958",
        specialties: "Workers' Compensation, Employment Law"
      },
      {
        name: "Jeffrey Allen Sigman",
        title: "Partner",
        bio: "Jeffrey Allen Sigman focuses on family law, divorce, and custody matters. He provides compassionate representation during difficult family situations.",
        email: "jsigman@dial-law.com",
        phone: "215-259-5958",
        specialties: "Family Law, Divorce, Custody"
      },
      {
        name: "Robin Scolnick",
        title: "Attorney",
        bio: "Ms. Scolnick received her Juris Doctor from Widener University School of Law in 1997 and her B.A. in elementary education from Rider University (College) in 1975. She is a member of the Pennsylvania Bar and the New Jersey Bar specializing in Family Law.",
        email: "rscolnick@dial-law.com",
        phone: "215-259-5958",
        specialties: "Family Law, Real Estate"
      },
      {
        name: "Jeffrey D. Schmidt",
        title: "Attorney",
        bio: "Jeff Schmidt is a Philadelphia native all the way to his core. He was born and raised in the Northeast part of the city and graduated from George Washington High School in 1994. Jeff handles a wide variety of personal injury matters, which include motor vehicle accidents, premises liability.",
        email: "jschmidt@dial-law.com",
        phone: "215-259-5958",
        specialties: "Personal Injury, Motor Vehicle Accidents, Premises Liability"
      },
      {
        name: "David K. String",
        title: "Attorney",
        bio: "David K. String is an experienced attorney focusing on personal injury and civil litigation matters.",
        email: "dstring@dial-law.com",
        phone: "215-259-5958",
        specialties: "Personal Injury, Civil Litigation"
      },
      {
        name: "Matthew A. Fleishman",
        title: "Attorney",
        bio: "Matthew A. Fleishman represents clients in personal injury and insurance matters.",
        email: "mfleishman@dial-law.com",
        phone: "215-259-5958",
        specialties: "Personal Injury, Insurance Law"
      },
      {
        name: "Joseph S. Lukomski",
        title: "Attorney",
        bio: "Joseph S. Lukomski handles personal injury cases and civil litigation.",
        email: "jlukomski@dial-law.com",
        phone: "215-259-5958",
        specialties: "Personal Injury, Civil Litigation"
      },
      {
        name: "Cheryl B. Wolf",
        title: "Attorney",
        bio: "Cheryl B. Wolf specializes in personal injury law and client advocacy.",
        email: "cwolf@dial-law.com",
        phone: "215-259-5958",
        specialties: "Personal Injury, Client Advocacy"
      }
    ]
  })

  // Create settlements
  const settlementsData = [
    { 
      title: 'Limited Tort Motor Vehicle Accident',
      amount: '$113,500', 
      caseType: 'Limited Tort Motor Vehicle Accident',
      description: 'Motor vehicle accident settlement for limited tort case',
      year: 2024,
      featured: true,
      order: 1
    },
    { 
      title: 'SEPTA Bus Accident',
      amount: '$50,000', 
      caseType: 'SEPTA Bus Accident',
      description: 'SEPTA transportation accident settlement',
      year: 2024,
      featured: true,
      order: 2
    },
    { 
      title: 'Trip and Fall Accident',
      amount: '$185,000', 
      caseType: 'Trip and Fall Accident',
      description: 'Premises liability slip and fall case',
      year: 2024,
      featured: true,
      order: 3
    },
    { 
      title: 'Verbal Threshold Motor Vehicle Accident',
      amount: '$140,000', 
      caseType: 'Verbal Threshold Motor Vehicle Accident',
      description: 'Serious motor vehicle accident case',
      year: 2024,
      featured: true,
      order: 4
    },
    { 
      title: 'Fall on Slippery Floor',
      amount: '$120,000', 
      caseType: 'Fall on Slippery Floor',
      description: 'Slip and fall on negligently maintained floor',
      year: 2024,
      featured: true,
      order: 5
    },
    { 
      title: 'Motorcycle Accident Settlement',
      amount: '$85,000', 
      caseType: 'Motorcycle Accident Settlement',
      description: 'Motorcycle vs automobile collision case',
      year: 2024,
      featured: true,
      order: 6
    },
    { 
      title: 'Premises Liability Case',
      amount: '$95,500', 
      caseType: 'Premises Liability Case',
      description: 'Property owner negligence case',
      year: 2024,
      featured: true,
      order: 7
    },
    { 
      title: 'Medical Malpractice Settlement',
      amount: '$175,000', 
      caseType: 'Medical Malpractice Settlement',
      description: 'Medical negligence and malpractice case',
      year: 2024,
      featured: true,
      order: 8
    },
    { 
      title: 'Truck Accident Verdict',
      amount: '$225,000', 
      caseType: 'Truck Accident Verdict',
      description: 'Commercial truck collision verdict',
      year: 2024,
      featured: true,
      order: 9
    },
    { 
      title: 'Workers Compensation Award',
      amount: '$67,500', 
      caseType: 'Workers Compensation Award',
      description: 'Workplace injury compensation case',
      year: 2024,
      featured: true,
      order: 10
    },
    { 
      title: 'Product Liability Settlement',
      amount: '$150,000', 
      caseType: 'Product Liability Settlement',
      description: 'Defective product injury case',
      year: 2024,
      featured: true,
      order: 11
    },
    { 
      title: 'Slip and Fall Case',
      amount: '$89,750', 
      caseType: 'Slip and Fall Case',
      description: 'Commercial property slip and fall incident',
      year: 2024,
      featured: true,
      order: 12
    }
  ];

  const settlementResult = await prisma.settlement.createMany({
    data: settlementsData
  });

  console.log(`Seeded ${lawyers.count} lawyers and ${settlementResult.count} settlements`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 