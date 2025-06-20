import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { prisma } from '@/lib/prisma';

export default async function AttorneysPage() {
  const attorneys = await prisma.lawyer.findMany({
    where: { active: true },
    orderBy: { order: 'asc' },
  });

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

      {/* Attorneys List - Profile Card Style */}
      <section className="section">
        <div className="section-title">
          <h3>Meet Our Attorneys</h3>
          <p>Over 15 skilled attorneys with hundreds of years of combined experience</p>
        </div>
        {attorneys.map((attorney) => (
          <div key={attorney.id} className="attorney-profile-card">
            <Image
              src={attorney.image || '/photos/default-headshot.jpg'}
              alt={attorney.name}
              width={220}
              height={260}
              className="attorney-profile-image"
            />
            <div className="attorney-profile-content">
              <div className="attorney-profile-name">{attorney.name}</div>
              <div className="attorney-profile-title">{attorney.title}</div>
              {attorney.specialties && (
                <div className="attorney-profile-specialties">
                  <strong>Specialties:</strong> {Array.isArray(attorney.specialties) ? attorney.specialties.join(', ') : attorney.specialties}
                </div>
              )}
              {attorney.bio && (
                <div className="attorney-profile-bio">{attorney.bio}</div>
              )}
              {attorney.education && (
                <div className="attorney-profile-extra"><strong>Education:</strong> {attorney.education}</div>
              )}
              {attorney.experience && (
                <div className="attorney-profile-extra"><strong>Experience:</strong> {attorney.experience}</div>
              )}
              {attorney.email && (
                <div className="attorney-profile-extra"><strong>Email:</strong> {attorney.email}</div>
              )}
              {attorney.phone && (
                <div className="attorney-profile-extra"><strong>Phone:</strong> {attorney.phone}</div>
              )}
              {attorney.name !== 'Robert A. Rovner' && (
                <div style={{ marginTop: '1.5rem' }}>
                  <Link href="/contact" className="contact-attorney-btn">
                    Contact {attorney.name.split(' ')[0]}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
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