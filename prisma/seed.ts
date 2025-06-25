const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Settlements data (copy from src/data/settlements.ts, but adapted for DB)
const settlements = [
  { amount: 113500, caseType: 'Limited Tort Motor Vehicle Accident', title: 'Limited Tort Motor Vehicle Accident', description: '', practice_area: 'Auto Accidents', date: new Date('2023-01-01') },
  { amount: 50000, caseType: 'SEPTA Bus Accident', title: 'SEPTA Bus Accident', description: '', practice_area: 'Auto Accidents', date: new Date('2023-01-02') },
  { amount: 185000, caseType: 'Trip and Fall Accident', title: 'Trip and Fall Accident', description: '', practice_area: 'Premises Liability', date: new Date('2023-01-03') },
  { amount: 140000, caseType: 'Verbal Threshold Motor Vehicle Accident', title: 'Verbal Threshold Motor Vehicle Accident', description: '', practice_area: 'Auto Accidents', date: new Date('2023-01-04') },
  { amount: 120000, caseType: 'Fall on Slippery Floor', title: 'Fall on Slippery Floor', description: '', practice_area: 'Premises Liability', date: new Date('2023-01-05') },
  { amount: 85000, caseType: 'Motorcycle Accident Settlement', title: 'Motorcycle Accident Settlement', description: '', practice_area: 'Auto Accidents', date: new Date('2023-01-06') },
  { amount: 95500, caseType: 'Premises Liability Case', title: 'Premises Liability Case', description: '', practice_area: 'Premises Liability', date: new Date('2023-01-07') },
  { amount: 175000, caseType: 'Medical Malpractice Settlement', title: 'Medical Malpractice Settlement', description: '', practice_area: 'Medical Malpractice', date: new Date('2023-01-08') },
  { amount: 225000, caseType: 'Truck Accident Verdict', title: 'Truck Accident Verdict', description: '', practice_area: 'Auto Accidents', date: new Date('2023-01-09') },
  { amount: 67500, caseType: 'Workers Compensation Award', title: 'Workers Compensation Award', description: '', practice_area: 'Workers Compensation', date: new Date('2023-01-10') },
  { amount: 150000, caseType: 'Product Liability Settlement', title: 'Product Liability Settlement', description: '', practice_area: 'Product Liability', date: new Date('2023-01-11') },
  { amount: 89750, caseType: 'Slip and Fall Case', title: 'Slip and Fall Case', description: '', practice_area: 'Premises Liability', date: new Date('2023-01-12') },
];

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

  // News articles from dial-law.com
  const newsData = [
    {
      title: 'What Should I Do if I Slip and Fall?',
      content: `Slip and fall accidents can be quite harmful. If you fell due to the negligence of another person or business, a lawsuit can help you recover medical expenses, lost wages, costs for damaged property, as well as money to compensate for pain and suffering. Keep these few tips in mind in the aftermath of such an incident, courtesy of our Philadelphia slip and fall lawyers at the Law Offices of Rovner, Allen, Rovner, Zimmerman & Nash.\n\nReceive medical attention:  It's vital that you receive medical treatment immediately. While urgent medical care is necessary to treat and heal your wounds and injuries, it is also necessary because the law requires a professional medical diagnosis to give an opinion of injury and the cause of that injury in any potential lawsuit.  You can't just say you are injured, but it needs to be well documented to have a winnable case.\n\nInspect the area: You need to immediately identify the cause of the fall and take many pictures. It can be snow, ice, a loose tile or uneven concrete. Take these pictures immediately. If you wait too long, the property owner might change the faulty conditions, record over the surveillance video, or they may disappear.  Preserving evidence is crucial to proving your case later.\n\nWrite it down: Record your account of the fall, as soon as possible, so it's still fresh in your mind. It will help us determine how to handle the potential lawsuit and people often forget small details as time passes.\n\nFind witnesses:  Write down their names as well as the contact information of anyone who saw the incident occur or, even if they didn't see the incident, someone might have relevant information about the conditions that existed at the time of your fall or shortly thereafter.  A witness like that can describe the conditions of the environment like the floor, lighting, etc. after you fell.\n\nReport It: If you slip and fall in a store or another place of business, inform an employee (preferably a manager) and fill out an accident report, if necessary.  Many people do not report their incident because they did not realize they were hurt, but if it is not reported the store may not know it even occurred.\n\nIn time, insurance adjusters and lawyers representing the responsible party may try to approach you. Be mindful that they are not trying to help you, but instead, they are trying to prepare a defense to your claims and doubt about what happened or your injuries.  Their goal is to pay you as little as possible and will use what you say, against you. Be cautious with what you say.\n\nMost important of all, speak with our Philadelphia trip and fall lawyers. We have many years of experience dealing with insurance adjusters or opposing lawyers. When one is injured, our law firm is ready to help.\n\nFor over 40 years, we have been accomplishing our motto of getting results for thousands of grateful and satisfied clients throughout Pennsylvania, New Jersey and Florida. The firm is headed and founded by former Pennsylvania State Senator and Assistant District Attorney Robert Rovner.\n\nTo hear more about our legal services, please call 215-259-5958 or fill out a contact form on our website immediately.`,
      date: new Date('2018-01-24T16:55:00'),
      source: 'dial-law.com',
      url: null
    },
    {
      title: 'What Are the Steps to Adopt a Stepchild?',
      content: `If you are a stepparent looking to formally adopt your spouse's child to become a lawful parent and guardian of that child, you will need to go through the complicated and formal process of adopting your stepchild.\n\nAt the Law Offices of Rovner, Allen, Rovner, Zimmerman & Nash, we not only work with those in need of a personal injury lawyer or accident lawyer in Bucks County, but we also have attorneys on staff that are experienced and familiar with the stepparent adoption system who can help you along your way to becoming a legally recognized family.\n\nHere are three of the first steps that you'll need to go through when officially adopting a stepchild.\n\nGet permission from both legal parents. This is usually the most difficult step when it comes to adopting a stepchild. Getting permission from your partner is usually not the issue, but you'll need to get consent from the other biological parent as well. However, if the other parent is not available or will not consent to give up their parental rights, you may still have the option to file with the courts to terminate parental rights.\n\nTerminate parental rights. Parental rights can be terminated in two cases. Both parents can consent to grant parental rights to the stepparent and terminating the rights of one of the biological parents. Or a court can terminate parental rights of one parent when it is found that it is in the best interest of the child. In most cases, parental rights will only be court terminated in the cases of abuse, failure to pay child support, alcoholism, drug addiction or other extreme circumstances surrounding a parent.\n\nPetition the court. Even when you have the other parent's consent, a prospective stepparent will still need to petition the court to grant custody of the child to the stepparent. If you have the consent of a parent, you can start the adoption process by filing an affidavit of consent along with the petition to terminate parental rights.\n\nAfter you've begun the process of stepparent adoption, you'll have a number of hearings so the court can determine whether the adoption is in the best interests of the child. A family lawyer can help streamline this process and increase the chances that your adoption will be approved and finalized in a timely manner.\n\nIf you are in need of a family lawyer to help with your adoption or a Bucks County injury lawyer, we encourage you to contact our legal team at the Law Offices of Rovner, Allen, Rovner, Zimmerman & Nash today by calling 215-259-5958 for a free consultation.`,
      date: new Date('2017-12-19T20:35:00'),
      source: 'dial-law.com',
      url: null
    },
    {
      title: 'What You Need to Know about Premises Liability This Winter',
      content: `Every year, the arrival of winter brings shorter days, grey skies, and cold weather, but it also brings many hazards like snow, ice, sleet and black ice throughout Pennsylvania and New Jersey.  For pedestrians, ice can be extremely dangerous when left untreated.  Our personal injury lawyers in Montgomery County know that each year, thousands of property owners are held liable for injuries occurring on their property thanks to winter weather. No matter if you're a business owner or a homeowner, you need to understand the area of law known as "premises liability," and make smart choices this winter to avoid trouble.\n\nIn a nutshell, premises liability results from the duty the law places upon a property owner to inspect for known and unknown danger and to take action to provide a safe environment for customers, guests or visitors. Premises liability claims can be someone tripping and falling over a broken sidewalk which was not repaired, but premises liability claims also occur more often during the winter, as more weather-related dangers increase the number of accidental falls, slips and tripping that occur. These falls often result in serious injuries including broken bones, torn ligaments and tendons, and can even result in death.\n\nLiability is established by proving that a property owner was negligent in failing to treat and/or clear dangers on their property or did not adequately warn customers or visitors that there was a danger which the owner should have known existed.\n\nFor example, let's say that there is ice on the sidewalk in front of both Store A and Store B. Store A's owner puts ice melt or sale on the sidewalk and clears away the ice as soon as she notices it has formed.  Since she cannot entirely remove the ice, she places a warning sign to alert the public and visitors to be careful of the ice. Store B's owner figures that the ice is not a big deal, and in a few hours it will just melt by itself when the afternoon sun hits the walkway.  He does nothing. In this scenario, should someone slip and hurt themselves because of the ice, Store B's owner will be liable for the resulting injuries because of his negligence in the way he maintains his property.  Store A's owner would not be liable, and because of her actions, no one will be hurt on her property.\n\nIf you have been injured due to a premises liability situation, getting assistance from a personal injury attorney in Montgomery County is the first step to navigating your case. Don't wait to seek assistance as crucial evidence can disappear or change. Call our team at the Law Offices of Rovner, Allen, Rovner, Zimmerman and Nash at 215-259-5958 to schedule a free consultation.\n\nWhen a person is injured, The Law Offices of Rovner, Allen, Rovner, Zimmerman & Nash are ready to help. For over 40 years, the Rovner Law Firm has been accomplishing its motto of getting results for many thousands of grateful and satisfied clients in Pennsylvania, New Jersey, and Florida. The firm is headed and founded by former Pennsylvania State Senator and Assistant District Attorney, Robert Rovner. The firm is made up of over 15 lawyers, plus paralegals, and investigators who put The Law Offices of Rovner, Allen, Rovner, Zimmerman & Nash at the top of the Philadelphia area legal profession.\n\nTo hear more about The Law Offices of Rovner, Allen, Rovner, Zimmerman & Nash, please visit https://dial-law.com, or call 215-259-5958 immediately.`,
      date: new Date('2017-11-29T15:26:00'),
      source: 'dial-law.com',
      url: null
    },
    {
      title: '4 Driving Dangers to Stay Aware of While on the Road This Fall',
      content: `Fall is here! As you're enjoying everything pumpkin, seasonal apple cider and football games with friends, make sure you're also staying aware of the dangers that can cause car accidents during this season.\n\nIf you rely on your car, motorcycle or truck during this time of year, make sure you're keeping a special eye out for these fall dangers and make sure that you have the number of a Bucks County auto or motorcycle lawyer from the Law Offices of Rovner, Allen, Rovner, Zimmerman and Nash in the event of an accident.\n\nWatch out for children. Fall means back to school for children, which means more cars and buses on the roads. Drivers need to watch out for increased pedestrian traffic in the morning and afternoon as children walk to and from school and their neighborhood bus stops. Also, as the days get shorter and Halloween approaches, more and more children will be outside playing when it starts to get dark out. If you're driving through a residential area, make sure to drive below the speed limit and keep your headlights turned on to avoid an accident.\n\nLeaves. Fall is a beautiful time of year with the colorful foliage, but as leaves begin to fall, they cover the roads, making streets slick while obscuring traffic lines and other pavement markings. They also hide potholes and other road hazards. And when it rains, it can make those wet leaves on the roadway as dangerous as ice.\n\nDeer. The fall season brings an increase in deer activity because it's their time for mating and migrating. If you live in a deer-heavy area, watch for darting deer, especially when driving at night.\n\nFog. Cold fall mornings often lead to fog, which can greatly limit your driving visibility and perception of distance. Fog tends to occur in low places or areas surrounded by hills, water, mountains, and trees. One common mistake drivers make during foggy conditions is putting on their high beams instead of staying with their low beams. This only makes visibility worse because your high beams will bounce off the fog and create glare. When driving through fog, slow down and stay well behind the car in front of you so you'll have adequate time to stop if you need to.\n\nKeeping yourself safe on the road this fall is all about keeping aware of your surroundings, turning your headlights on and slowing down. If you are in an accident and require the assistance of a Bucks County truck accident attorney, be sure to call our legal team at the Law Offices of Rovner, Allen, Rovner, Zimmerman and Nash at 215-259-5958 as soon as it is safe for you to do so.\n\nFor over 40 years, our law firm has been accomplishing its motto of getting results for many thousands of grateful and satisfied clients in Pennsylvania, New Jersey, and Florida. The firm is headed and founded by former Pennsylvania State Senator and Assistant District Attorney, Robert Rovner. The firm is made up of over 15 lawyers, plus paralegals, and investigators who put The Law Offices of Rovner, Allen, Rovner, Zimmerman & Nash at the top of the Philadelphia area legal profession.\n\nTo hear more about The Law Offices of Rovner, Allen, Rovner, Zimmerman & Nash, please visit https://dial-law.com or call 215-259-5958 immediately.`,
      date: new Date('2017-10-04T15:38:00'),
      source: 'dial-law.com',
      url: null
    },
    {
      title: 'What to Do After a Slip and Fall Accident',
      content: `No one imagines that it's going to happen to them, yet it does, many times a year. You're walking on a hard floor, often out in public, when suddenly you find yourself on the ground after a short, but violent fall. You may be bruised, injured, and may have even suffered a broken bone. Whether it's occurred at a friend's home or a hospital, a store, or your place of work, the property owner or host facility is often found to be at fault for any injuries that you've sustained on their premises.\n\nIf you've sustained injuries from a slip and fall, speaking with a Philadelphia slip and fall lawyer from the Law Offices of Rovner, Allen, Rovner, Zimmerman & Nash should be your first step to making sure that you're able to focus on your physical recovery, not your medical bills. While you get necessary medical care, your experienced legal team at Rovner, Allen, Rovner, Zimmerman & Nash will be investigating all of the responsible parties, locating witnesses, pictures, surveillance footage, and determining the cause of the condition that resulted in your fall and subsequent injuries.\n\nThe first thing that you should do following a fall is to make sure that you receive medical treatment. Put your health first and visit a hospital if you notice any injuries. If you've hit your head during the fall, it is absolutely imperative that you are examined by a medical professional; even if you don't feel any serious pain, you still may be suffering from a concussion or other internal injuries which are not visible.\n\nThe age group who is considered to be the most at-risk for falls are older adults aged 55 and up, as people in this group tend to fall more frequently and to sustain more serious injuries during their falls. 67% of fall fatalities occur in people over the age of 75.\n\nIf you've been injured from a fall, one of the most important things you can do is to get a reliable Philadelphia slip and fall attorney on your side, right away, who will fight for your rights. These cases are handled on a contingency fee basis which means that you do not pay for anything.  The lawyers at Rovner, Allen, Rovner, Zimmerman & Nash pay for all costs and only get paid when you get paid for your losses.  Call 215-259-5958 today, and an associate from Rovner, Allen, Rovner, Zimmerman & Nash will help you navigate the facts of your case and determine the next steps that you should take.`,
      date: new Date('2017-10-04T15:32:00'),
      source: 'dial-law.com',
      url: null
    }
  ];

  // Clear News table before seeding
  await prisma.news.deleteMany();
  await prisma.news.createMany({ data: newsData });

  // Clear existing settlements
  await prisma.settlement.deleteMany();

  // Seed new settlements
  for (const s of settlements) {
    await prisma.settlement.create({
      data: {
        title: s.title,
        description: s.description,
        amount: s.amount,
        date: s.date,
        caseType: s.caseType,
      },
    });
  }

  console.log('Seeded settlements!');
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 