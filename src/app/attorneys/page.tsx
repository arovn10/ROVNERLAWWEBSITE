import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample attorney data - in production this would come from the database
const attorneys = [
  {
    id: 1,
    name: "Robert A. Rovner",
    title: "Founding Partner (1943-2021)",
    bio: "Senator Robert A. Rovner founded and served as Senior Partner in the Law Firm of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt from 1980 until 2021. In 1970, He was elected the youngest State Senator in Pennsylvania history representing Northeast Philadelphia and Bucks County.",
    specialties: "Personal Injury, Civil Litigation",
    image: "/photos/headshot.jpg"
  },
  {
    id: 2,
    name: "Steven L. Rovner",
    title: "Principal and Managing Attorney",
    bio: "Steven is the principal and managing attorney of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt. He was born in Philadelphia and a graduate of Lower Moreland High School (1985), The University of Pennsylvania (1989) and The University of Miami School of Law (1992).",
    specialties: "Personal Injury, Auto Accidents, Medical Malpractice",
    image: "/photos/headshot2.jpg"
  },
  {
    id: 3,
    name: "Bruce S. Allen",
    title: "Partner",
    bio: "Bruce S. Allen Juris Doctor degree (May 1976) from Delaware Law School of Widener University; Bachelor of Science degree (May 1973) from Philadelphia University. Admitted to practice law in Pennsylvania, Federal District Court for the Eastern District of Pennsylvania and before the United States Supreme Court.",
    specialties: "Personal Injury, Products Liability",
    image: "/photos/headshot3.jpg"
  },
  {
    id: 4,
    name: "Howard P. Rovner",
    title: "Partner",
    bio: "NE High School 1972 Graduated Temple University 1976 – BBA-Business Administration – Major in Business Law and Industrial Relations Delaware Law School of Widener University January 1980 – Juris Doctor.",
    specialties: "Workers' Compensation, Business Law",
    image: "/photos/headshot.jpg"
  },
  {
    id: 5,
    name: "Jeffrey I. Zimmerman",
    title: "Partner",
    bio: "Jeffrey I. Zimmerman specializes in personal injury law, workers' compensation, and employment matters. He brings extensive experience in representing injured parties and ensuring they receive proper compensation.",
    specialties: "Workers' Compensation, Employment Law",
    image: "/photos/headshot2.jpg"
  },
  {
    id: 6,
    name: "Jeffrey Allen Sigman",
    title: "Partner",
    bio: "Jeffrey Allen Sigman focuses on family law, divorce, and custody matters. He provides compassionate representation during difficult family situations.",
    specialties: "Family Law, Divorce, Custody",
    image: "/photos/headshot3.jpg"
  },
  {
    id: 7,
    name: "Robin Scolnick",
    title: "Attorney",
    bio: "Ms. Scolnick received her Juris Doctor from Widener University School of Law in 1997 and her B.A. in elementary education from Rider University (College) in 1975. She is a member of the Pennsylvania Bar and the New Jersey Bar specializing in Family Law.",
    specialties: "Family Law, Real Estate",
    image: "/photos/headshot.jpg"
  },
  {
    id: 8,
    name: "Jeffrey D. Schmidt",
    title: "Attorney",
    bio: "Jeff Schmidt is a Philadelphia native all the way to his core. He was born and raised in the Northeast part of the city and graduated from George Washington High School in 1994. Jeff handles a wide variety of personal injury matters, which include motor vehicle accidents, premises liability.",
    specialties: "Personal Injury, Motor Vehicle Accidents, Premises Liability",
    image: "/photos/headshot2.jpg"
  },
  {
    id: 9,
    name: "David K. String",
    title: "Attorney",
    bio: "David K. String is an experienced attorney focusing on personal injury and civil litigation matters.",
    specialties: "Personal Injury, Civil Litigation",
    image: "/photos/headshot3.jpg"
  },
  {
    id: 10,
    name: "Matthew A. Fleishman",
    title: "Attorney",
    bio: "Matthew A. Fleishman represents clients in personal injury and insurance matters.",
    specialties: "Personal Injury, Insurance Law",
    image: "/photos/headshot.jpg"
  },
  {
    id: 11,
    name: "Joseph S. Lukomski",
    title: "Attorney",
    bio: "Joseph S. Lukomski handles personal injury cases and civil litigation.",
    specialties: "Personal Injury, Civil Litigation",
    image: "/photos/headshot2.jpg"
  },
  {
    id: 12,
    name: "Cheryl B. Wolf",
    title: "Attorney",
    bio: "Cheryl B. Wolf specializes in personal injury law and client advocacy.",
    specialties: "Personal Injury, Client Advocacy",
    image: "/photos/headshot3.jpg"
  }
];

export default function AttorneysPage() {
  return (
    <div>
      <Header currentPage="attorneys" />

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>Our Legal Team</h2>
          <p>Experienced Attorneys Fighting for Your Rights</p>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="section">
        <div className="section-title">
          <h3>Meet Our Attorneys</h3>
          <p>Over 15 skilled attorneys with hundreds of years of combined experience</p>
        </div>
        
        <div className="attorneys-grid">
          {attorneys.map((attorney) => (
            <div key={attorney.id} className="attorney-card">
              <div className="attorney-image-container">
                <Image 
                  src={attorney.image} 
                  alt={attorney.name}
                  width={300}
                  height={300}
                  className="attorney-image"
                />
              </div>
              <div className="attorney-content">
                <h3 className="attorney-name">{attorney.name}</h3>
                <h4 className="attorney-title">{attorney.title}</h4>
                <div className="attorney-specialties">
                  <span className="specialties-label">Specialties:</span>
                  <span className="specialties-text">{attorney.specialties}</span>
                </div>
                <p className="attorney-bio">{attorney.bio}</p>
                <div className="attorney-contact">
                  <Link href="/contact" className="contact-attorney-btn">
                    Contact {attorney.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="section team-why-choose">
        <div className="about-content">
          <div className="about-text">
            <div className="content-title-section">
              <h2 className="content-title">Why Choose Our Legal Team?</h2>
              <div className="accent-bar"></div>
            </div>

            <div className="content-text-blocks">
              <p className="content-text">
                Our team of over 15 lawyers plus our paralegals, investigators, experts, all with hundreds of years of combined experience, put us at the top of the Philadelphia Area legal profession.
              </p>

              <div className="highlight-box blue-highlight">
                <h3 className="highlight-title">Unmatched Experience & Results</h3>
                <ul className="highlight-list">
                  <li>Former Pennsylvania State Senator on our team</li>
                  <li>Former Assistant District Attorneys</li>
                  <li>Hundreds of years of combined legal experience</li>
                  <li>Proven track record of successful settlements and verdicts</li>
                  <li>Recognized leaders in personal injury law</li>
                </ul>
              </div>

              <p className="content-text">
                When you meet with an unexpected injury, our injury attorneys are there with experienced support to assist you from the very start. We obtain substantial compensation in accident cases and for injured parties. We Get Results.
              </p>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="sidebar-box contact-form-box">
              <h3 className="sidebar-title">Schedule a Consultation</h3>
              <div className="consultation-content">
                <p>Ready to discuss your case with one of our experienced attorneys?</p>
                <Link href="/contact" className="phone-cta-btn">Get Free Consultation</Link>
                <p className="quick-contact-note">No fee unless we win your case</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 