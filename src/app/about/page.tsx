"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFirmName } from '@/lib/FirmNameContext';

export default function AboutPage() {
  const { firmName } = useFirmName();

  return (
    <div>
      <Header currentPage="about" />

      {/* Hero Section with Banner Image */}
      <section className="hero-professional">
        <div className="hero-image-overlay">
          <Image 
            src="/photos/banner-about2-1024x128.png" 
            alt="About Our Law Firm" 
            width={1024}
            height={128}
            className="hero-background"
            priority
            style={{ objectPosition: 'center', objectFit: 'cover', height: '100%' }}
          />
        </div>
        <div className="hero-content">
          <h2>About Our Firm</h2>
          <p>{firmName}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="about-content">
          <div className="about-text">
            <div className="content-title-section">
              <h2 className="content-title">{firmName}</h2>
              <div className="accent-bar"></div>
            </div>

            <div className="content-text-blocks">
              <p className="content-text">
                When you are seriously injured there is only one law firm to call. The Law Offices of {firmName}. For over 40 years the Rovner Law Firm has been accomplishing its motto of getting results for many thousands of grateful and satisfied clients in Pennsylvania, New Jersey, and Florida.
              </p>

              <p className="content-text">
                The firm is headed and founded by former Pennsylvania State Senator and Assistant District Attorney, Robert Rovner. Our team of over 15 lawyers plus our paralegals, investigators, experts, all with hundreds of years of combined experience, put us at the top of the Philadelphia Area legal profession.
              </p>

              <p className="content-text">
                Widely recognized as one of the largest and most experienced personal injury law firms handling Wrongful Death Cases, Motor Vehicle Accidents, Premises Accidents, Products Liability, and Medical Malpractice; some of our lawyers also focus their experience in other areas from our Workers Compensation team to Divorce, Child Support, Custody, and Domestic Relations, to Criminal Defense, Social Security/Disability and general legal matters such as Real Estate, Landlord-Tenant, Wills, and Estates.
              </p>

              <p className="content-text">
                Our team is always there to meet all of your legal needs from our offices in Pennsylvania and New Jersey serving the entire Philadelphia Metropolitan Area and Southern New Jersey including Pennsylvania State Senator, Bucks and Montgomery Counties.
              </p>

              <div className="highlight-box blue-highlight">
                <h3 className="highlight-title">When you meet with an unexpected injury</h3>
                <p>
                  Our injury attorneys are there with experienced support to assist you from the very start. We obtain substantial compensation in accident cases and for injured parties. <strong>We Get Results</strong>
                </p>
              </div>

              <p className="content-text">
                In addition to providing skilled and experienced legal representation, we offer exceptionally strong client service. We will be readily accessible throughout your case, to answer any questions or address any concerns. We understand that this can be a stressful and overwhelming time and we work to reduce the difficulties of pursuing legal action.
              </p>

              <p className="content-text">
                The {firmName} law firm approaches every case as though it were going to trial. Meanwhile in many cases our lawyers are able to resolve the matters by negotiating acceptable, even generous, settlement agreements, always looking out for the best interests of our client.
              </p>

              <p className="content-text">
                If you or a love one has suffered an injury or wrongful death due to a defective product, our personal injury attorneys are prepared to evaluate your claim and help you get fair compensation for your loss. In other types of legal representation, we are there for you, working in your corner, to obtain the best possible result under the circumstances
              </p>

              <div className="highlight-box gold-highlight">
                <h3 className="highlight-title">At the law offices of {firmName}, "We Get Results!"</h3>
                <p>
                  If you or a loved one has been injured, or is in need of legal representation, contact us today for a free consultation to confidentially speak with one of our attorneys. All you need is to call and leave the rest to us.
                </p>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            {/* Practice Areas Box */}
            <div className="sidebar-box practice-areas-box">
              <h3 className="sidebar-title">PRACTICE AREAS:</h3>
              <ul className="practice-areas-list">
                <li><Link href="/practice">Personal Injury</Link></li>
                <li><Link href="/practice">Auto Accidents</Link></li>
                <li><Link href="/practice">Motorcycle Accidents</Link></li>
                <li><Link href="/practice">Truck Accidents</Link></li>
                <li><Link href="/practice">Premises Liability</Link></li>
                <li><Link href="/practice">Medical Malpractice</Link></li>
                <li><Link href="/practice">Defective Products</Link></li>
                <li><Link href="/practice">Workers' Compensation</Link></li>
                <li><Link href="/practice">Divorce/ Family Law/ Custody</Link></li>
                <li><Link href="/practice">Criminal Defense</Link></li>
                <li><Link href="/practice">Social Security Disability</Link></li>
                <li><Link href="/practice">General Legal Matters</Link></li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="sidebar-box contact-form-box">
              <h3 className="sidebar-title">Contact Us!</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label>Name *</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input type="tel" />
                </div>
                <div className="form-group">
                  <label>Home Address</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Date of Incident *</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Are you represented by another lawyer for this matter?</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="represented" value="no" />
                      No
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="represented" value="yes" />
                      Yes
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Facts of what happened *</label>
                  <textarea rows={4}></textarea>
                </div>
                <div className="form-disclaimer">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    *I understand and agree that the submission of this form does not create an attorney-client relationship.
                  </label>
                </div>
                <button type="submit" className="submit-btn">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Commercial Video */}
            <div className="sidebar-box commercial-box">
              <h3 className="sidebar-title">Our TV Commercial</h3>
              <div className="commercial-video" style={{ 
                width: '100%', 
                aspectRatio: '16/9', 
                background: '#222', 
                borderRadius: 12, 
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <iframe 
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: 12
                  }}
                  src="https://www.youtube.com/embed/KIk_uZ_Jyg0?si=7DtH3rNXINH0S59X" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 