const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const lawyers = [
  {
    name: "Robert A. Rovner",
    title: "Founding Partner (1943-2021)",
    bio: "Senator Robert A. Rovner founded and served as Senior Partner in the Law Firm of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt from 1980 until 2021. In 1970, He was elected the youngest State Senator in Pennsylvania history representing Northeast Philadelphia and Bucks County.",
    education: "State Senator in Pennsylvania history",
    experience: "Senior Partner from 1980 until 2021",
    specialties: "Personal Injury, Civil Litigation",
    email: "info@dial-law.com",
    phone: "215-259-5958",
    order: 1,
    active: true,
    image: "/lawyers/robert-rovner.jpg"
  },
  {
    name: "Steven L. Rovner",
    title: "Principal and Managing Attorney",
    bio: "Steven is the principal and managing attorney of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt. He was born in Philadelphia and a graduate of Lower Moreland High School (1985), The University of Pennsylvania (1989) and The University of Miami School of Law (1992).",
    education: "The University of Miami School of Law (1992)\nThe University of Pennsylvania (1989)\nLower Moreland High School (1985)",
    experience: "Principal and managing attorney",
    specialties: "Personal Injury, Auto Accidents, Medical Malpractice",
    email: "srovner@dial-law.com",
    phone: "215-259-5958",
    order: 2,
    active: true,
    image: "/lawyers/steven-rovner.jpg"
  },
  {
    name: "Bruce S. Allen",
    title: "Partner",
    bio: "Bruce S. Allen Juris Doctor degree (May 1976) from Delaware Law School of Widener University; Bachelor of Science degree (May 1973) from Philadelphia University. Admitted to practice law in Pennsylvania, Federal District Court for the Eastern District of Pennsylvania and before the United States Supreme Court.",
    education: "Delaware Law School of Widener University (1976)\nPhiladelphia University (1973)",
    experience: "Admitted to practice law in Pennsylvania, Federal District Court for the Eastern District of Pennsylvania and before the United States Supreme Court",
    specialties: "Personal Injury, Products Liability",
    email: "ballen@dial-law.com",
    phone: "215-259-5958",
    order: 3,
    active: true,
    image: "/lawyers/bruce-allen.jpg"
  },
  {
    name: "Howard P. Rovner",
    title: "Partner",
    bio: "NE High School 1972 Graduated Temple University 1976 – BBA-Business Administration – Major in Business Law and Industrial Relations Delaware Law School of Widener University January 1980 – Juris Doctor.",
    education: "Delaware Law School of Widener University (1980)\nTemple University (1976)\nNE High School (1972)",
    experience: "Partner at Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt",
    specialties: "Workers' Compensation, Business Law",
    email: "hrovner@dial-law.com",
    phone: "215-259-5958",
    order: 4,
    active: true,
    image: "/lawyers/howard-rovner.jpg"
  },
  {
    name: "Jeffrey I. Zimmerman",
    title: "Partner",
    bio: "Jeffrey I. Zimmerman specializes in personal injury law, workers' compensation, and employment matters. He brings extensive experience in representing injured parties and ensuring they receive proper compensation.",
    education: "Juris Doctor",
    experience: "Extensive experience in personal injury law and workers' compensation",
    specialties: "Workers' Compensation, Employment Law",
    email: "jzimmerman@dial-law.com",
    phone: "215-259-5958",
    order: 5,
    active: true,
    image: "/lawyers/jeffrey-zimmerman.jpg"
  },
  {
    name: "Jeffrey Allen Sigman",
    title: "Partner",
    bio: "Jeffrey Allen Sigman focuses on family law, divorce, and custody matters. He provides compassionate representation during difficult family situations.",
    education: "Juris Doctor",
    experience: "Extensive experience in family law",
    specialties: "Family Law, Divorce, Custody",
    email: "jsigman@dial-law.com",
    phone: "215-259-5958",
    order: 6,
    active: true,
    image: "/lawyers/jeffrey-sigman.jpg"
  },
  {
    name: "Robin Scolnick",
    title: "Attorney",
    bio: "Ms. Scolnick received her Juris Doctor from Widener University School of Law in 1997 and her B.A. in elementary education from Rider University (College) in 1975. She is a member of the Pennsylvania Bar and the New Jersey Bar specializing in Family Law.",
    education: "Widener University School of Law (1997)\nRider University (1975)",
    experience: "Member of the Pennsylvania Bar and the New Jersey Bar",
    specialties: "Family Law, Real Estate",
    email: "rscolnick@dial-law.com",
    phone: "215-259-5958",
    order: 7,
    active: true,
    image: "/lawyers/robin-scolnick.jpg"
  },
  {
    name: "Jeffrey D. Schmidt",
    title: "Attorney",
    bio: "Jeff Schmidt is a Philadelphia native all the way to his core. He was born and raised in the Northeast part of the city and graduated from George Washington High School in 1994. Jeff handles a wide variety of personal injury matters, which include motor vehicle accidents, premises liability.",
    education: "George Washington High School (1994)",
    experience: "Extensive experience in personal injury matters",
    specialties: "Personal Injury, Motor Vehicle Accidents, Premises Liability",
    email: "jschmidt@dial-law.com",
    phone: "215-259-5958",
    order: 8,
    active: true,
    image: "/lawyers/jeffrey-schmidt.jpg"
  },
  {
    name: "David K. String",
    title: "Attorney",
    bio: "David K. String is an experienced attorney focusing on personal injury and civil litigation matters.",
    education: "Juris Doctor",
    experience: "Experienced in personal injury and civil litigation",
    specialties: "Personal Injury, Civil Litigation",
    email: "dstring@dial-law.com",
    phone: "215-259-5958",
    order: 9,
    active: true,
    image: "/lawyers/david-string.jpg"
  },
  {
    name: "Matthew A. Fleishman",
    title: "Attorney",
    bio: "Matthew A. Fleishman represents clients in personal injury and insurance matters.",
    education: "Juris Doctor",
    experience: "Experience in personal injury and insurance law",
    specialties: "Personal Injury, Insurance Law",
    email: "mfleishman@dial-law.com",
    phone: "215-259-5958",
    order: 10,
    active: true,
    image: "/lawyers/matthew-fleishman.jpg"
  },
  {
    name: "Joseph S. Lukomski",
    title: "Attorney",
    bio: "Joseph S. Lukomski handles personal injury cases and civil litigation.",
    education: "Juris Doctor",
    experience: "Experience in personal injury and civil litigation",
    specialties: "Personal Injury, Civil Litigation",
    email: "jlukomski@dial-law.com",
    phone: "215-259-5958",
    order: 11,
    active: true,
    image: "/lawyers/joseph-lukomski.jpg"
  },
  {
    name: "Cheryl B. Wolf",
    title: "Attorney",
    bio: "Cheryl B. Wolf specializes in personal injury law and client advocacy.",
    education: "Juris Doctor",
    experience: "Experience in personal injury law",
    specialties: "Personal Injury, Client Advocacy",
    email: "cwolf@dial-law.com",
    phone: "215-259-5958",
    order: 12,
    active: true,
    image: "/lawyers/cheryl-wolf.jpg"
  }
]

async function main() {
  console.log('Starting to create lawyers...')
  
  // Clear existing lawyers
  await prisma.lawyer.deleteMany()
  
  // Create new lawyers
  for (const lawyer of lawyers) {
    const created = await prisma.lawyer.create({
      data: lawyer
    })
    console.log(`Created lawyer: ${created.name}`)
  }
  
  console.log('Finished creating lawyers!')
}

main()
  .catch((e) => {
    console.error('Error creating lawyers:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 