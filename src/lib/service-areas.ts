/**
 * Local pages for the markets the firm already names.
 *
 * Four pages, not a city-page template. Each one states the same true fact —
 * there is one office, in Feasterville-Trevose, Bucks County — and then the
 * communities and directions that are specific to that place. Delaware and
 * Chester counties stay on /locations; they do not get a near-duplicate URL.
 */

export interface ServiceAreaFaq {
  question: string;
  answer: string;
}

export interface ServiceArea {
  slug: string;
  /** Visible H1 and title subject. */
  h1: string;
  /** Short name used in breadcrumbs and links. */
  name: string;
  /** schema.org areaServed name, e.g. "Bucks County, Pennsylvania". */
  areaServedName: string;
  areaServedType: 'AdministrativeArea' | 'City' | 'State';
  metaDescription: string;
  /** First paragraph. Written to be quoted. About 50–70 words. */
  answer: string;
  /** Following paragraphs. Facts already published on /locations or the homepage. */
  body: string[];
  /** Which Locations columns supply the community list, in order. */
  communityFields: Array<
    'bucksCounty' | 'philadelphiaArea' | 'montgomeryCounty' | 'southernNJ' | 'centralNJ'
  >;
  communityHeading: string;
  directionsHeading: string;
  directions: string;
  faqs: ServiceAreaFaq[];
}

const FEE =
  'Consultations are free. On injury matters the firm works with no fee unless it recovers.';

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'bucks-county',
    name: 'Bucks County',
    h1: 'Personal Injury Lawyers in Bucks County',
    areaServedName: 'Bucks County, Pennsylvania',
    areaServedType: 'AdministrativeArea',
    metaDescription:
      'The firm’s only office is in Feasterville-Trevose, Bucks County. Car accidents, malpractice and work injuries. Free consultation.',
    answer:
      'Rovner, Allen, Rovner and Sigman is a personal injury firm whose office is in Bucks County. The address is 175 Bustleton Pike, Feasterville-Trevose, PA 19053. People from Doylestown, Levittown, Langhorne, Yardley, Bristol, Newtown, Warminster, Warrington and Chalfont are represented from that office. The firm was established in 1980.',
    body: [
      'There is one office. It is on Bustleton Pike in Feasterville-Trevose, inside Bucks County, with free parking and handicap-accessible spaces near the entrance. You do not travel to a separate Doylestown location.',
      'The practice covers personal injury, car and truck accidents, motorcycle accidents, medical malpractice, slip and fall, workers’ compensation and related civil matters for people hurt in Bucks County. ' +
        FEE,
      'Hours are Monday through Friday, 9:00 a.m. to 5:00 p.m. Saturday is by appointment. Sunday the office is closed. Call 215-259-5958 or toll-free 888-DIAL-LAW (888-342-5529).',
    ],
    communityFields: ['bucksCounty'],
    communityHeading: 'Bucks County communities',
    directionsHeading: 'Getting to the Bucks County office',
    directions:
      'The office is at 175 Bustleton Pike, Feasterville-Trevose. From Street Road, turn onto Bustleton Pike. The office is on the right. From Philadelphia, take I-95 North to the Street Road exit, turn right on Street Road, then left on Bustleton Pike.',
    faqs: [
      {
        question: 'Where is your Bucks County office?',
        answer:
          '175 Bustleton Pike, Feasterville-Trevose, PA 19053. Feasterville-Trevose is in Bucks County. This is the firm’s only office.',
      },
      {
        question: 'Do you represent people outside Feasterville-Trevose?',
        answer:
          'Yes. Clients come from across Bucks County, including Doylestown, Newtown, Levittown, Langhorne, Yardley, Bristol, Warminster, Warrington and Chalfont.',
      },
      {
        question: 'How much does a consultation cost?',
        answer:
          'Nothing. The consultation is free. On injury matters the firm is paid only if it recovers.',
      },
    ],
  },
  {
    slug: 'philadelphia',
    name: 'Philadelphia',
    h1: 'Personal Injury Lawyers Serving Philadelphia',
    areaServedName: 'Philadelphia, Pennsylvania',
    areaServedType: 'City',
    metaDescription:
      'Philadelphia personal injury clients are represented from the Feasterville-Trevose office, one I-95 exit up. Free consultation.',
    answer:
      'Rovner, Allen, Rovner and Sigman represents people hurt in Philadelphia. The office is not in Center City. It is at 175 Bustleton Pike, Feasterville-Trevose, PA 19053, in neighboring Bucks County, a short drive up I-95 from Northeast Philadelphia. The firm was established in 1980.',
    body: [
      'Clients come from Center City, Northeast Philadelphia, South Philadelphia, West Philadelphia, North Philadelphia and Northwest Philadelphia. The case is handled from the Feasterville-Trevose office. Publishing a Philadelphia street address would be false, so this page does not.',
      'From Philadelphia, take I-95 North to the Street Road exit. Turn right on Street Road, then left on Bustleton Pike. The office is on the right. Parking is free.',
      'Matters include car and truck accidents, motorcycle accidents, medical malpractice, slip and fall, and workers’ compensation, along with other civil litigation. ' +
        FEE,
    ],
    communityFields: ['philadelphiaArea'],
    communityHeading: 'Philadelphia neighborhoods',
    directionsHeading: 'From Philadelphia to the office',
    directions:
      'Take I-95 North to the Street Road exit. Turn right on Street Road, then left on Bustleton Pike. The office, 175 Bustleton Pike, Feasterville-Trevose, PA 19053, is on the right.',
    faqs: [
      {
        question: 'Do you have an office in Philadelphia?',
        answer:
          'No. The only office is at 175 Bustleton Pike, Feasterville-Trevose, PA 19053, in Bucks County. Philadelphia clients are represented from there.',
      },
      {
        question: 'How do I get there from Philadelphia?',
        answer:
          'Take I-95 North to the Street Road exit. Turn right on Street Road, then left on Bustleton Pike. The office is on the right, and parking is free.',
      },
      {
        question: 'Which Philadelphia areas do you serve?',
        answer:
          'Center City, Northeast Philadelphia, South Philadelphia, West Philadelphia, North Philadelphia and Northwest Philadelphia.',
      },
    ],
  },
  {
    slug: 'montgomery-county',
    name: 'Montgomery County',
    h1: 'Personal Injury Lawyers Serving Montgomery County',
    areaServedName: 'Montgomery County, Pennsylvania',
    areaServedType: 'AdministrativeArea',
    metaDescription:
      'Montgomery County injury clients — Norristown, King of Prussia, Abington, Lansdale — are represented from the Bucks County office. Free consultation.',
    answer:
      'Rovner, Allen, Rovner and Sigman represents people hurt in Montgomery County from its office in neighboring Bucks County. The address is 175 Bustleton Pike, Feasterville-Trevose, PA 19053. There is no Norristown or King of Prussia office. The firm was established in 1980.',
    body: [
      'Montgomery County clients include people in Norristown, King of Prussia, Lansdale, Pottstown, Conshohocken, Ardmore, Abington and Horsham. Abington and Horsham sit closest to the Feasterville-Trevose office.',
      'The work covers car and truck accidents, motorcycle accidents, medical malpractice, premises injuries and workers’ compensation, plus other civil matters. ' +
        FEE,
      'Call 215-259-5958 or 888-DIAL-LAW. Office hours are Monday through Friday, 9:00 a.m. to 5:00 p.m., Saturday by appointment.',
    ],
    communityFields: ['montgomeryCounty'],
    communityHeading: 'Montgomery County communities',
    directionsHeading: 'Office for Montgomery County clients',
    directions:
      'The office is at 175 Bustleton Pike, Feasterville-Trevose, PA 19053, in Bucks County, east of Abington and Horsham. From Street Road, turn onto Bustleton Pike. The office is on the right. Parking is free.',
    faqs: [
      {
        question: 'Is there a Montgomery County office?',
        answer:
          'No. Montgomery County clients are represented from 175 Bustleton Pike, Feasterville-Trevose, PA 19053, in Bucks County.',
      },
      {
        question: 'Which Montgomery County towns do you serve?',
        answer:
          'Norristown, King of Prussia, Lansdale, Pottstown, Conshohocken, Ardmore, Abington and Horsham, among others in the county.',
      },
      {
        question: 'How much does it cost to talk to a lawyer?',
        answer: 'The consultation is free. On injury matters there is no fee unless the firm recovers.',
      },
    ],
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    h1: 'Personal Injury Lawyers Serving South and Central New Jersey',
    areaServedName: 'New Jersey',
    areaServedType: 'State',
    metaDescription:
      'Clients in Camden, Burlington, Mercer, Atlantic and Gloucester counties are represented from the Feasterville-Trevose, PA office. Free consultation.',
    answer:
      'Rovner, Allen, Rovner and Sigman represents clients in southern and central New Jersey from its Pennsylvania office at 175 Bustleton Pike, Feasterville-Trevose, PA 19053. The counties named on the firm’s locations page are Camden, Burlington, Mercer, Atlantic and Gloucester. The firm was established in 1980.',
    body: [
      'Southern New Jersey communities include Camden, Cherry Hill, Voorhees, Mount Laurel, Marlton, Pennsauken, Haddonfield and Collingswood. Central New Jersey communities include Trenton, Princeton, Hamilton, Lawrence, Ewing, Hopewell, Pennington and West Windsor.',
      'From New Jersey, take Route 1 North to the Street Road exit. Turn left on Street Road, then left on Bustleton Pike. The office is on the right. Parking is free.',
      'The practice includes personal injury, car and truck accidents, medical malpractice and workers’ compensation for New Jersey clients, along with other civil matters. ' +
        FEE,
    ],
    communityFields: ['southernNJ', 'centralNJ'],
    communityHeading: 'New Jersey communities',
    directionsHeading: 'From New Jersey to the office',
    directions:
      'Take Route 1 North to the Street Road exit. Turn left on Street Road, then left on Bustleton Pike. The office, 175 Bustleton Pike, Feasterville-Trevose, PA 19053, is on the right.',
    faqs: [
      {
        question: 'Do you have a New Jersey office?',
        answer:
          'No. New Jersey clients are represented from the office at 175 Bustleton Pike, Feasterville-Trevose, PA 19053.',
      },
      {
        question: 'Which New Jersey counties do you serve?',
        answer:
          'Camden, Burlington, Mercer, Atlantic and Gloucester counties, including Cherry Hill, Mount Laurel, Trenton and Princeton.',
      },
      {
        question: 'How do I start a New Jersey injury case?',
        answer:
          'Call 215-259-5958 or 888-DIAL-LAW, or send the form on the contact page. The consultation is free and does not by itself create an attorney-client relationship.',
      },
    ],
  },
];

export function serviceAreaBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}

/** County label as it appears in the locations-page lists → page to send people to. */
export const COUNTY_PAGE: Record<string, string> = {
  'Philadelphia County': '/locations/philadelphia',
  'Bucks County': '/locations/bucks-county',
  'Montgomery County': '/locations/montgomery-county',
  'Camden County': '/locations/new-jersey',
  'Burlington County': '/locations/new-jersey',
  'Mercer County': '/locations/new-jersey',
  'Atlantic County': '/locations/new-jersey',
  'Gloucester County': '/locations/new-jersey',
};
