"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFirmName } from '@/lib/FirmNameContext';

export default function CriminalDefensePage() {
  const { firmName } = useFirmName();

  return (
    <div>
      <Header currentPage="practice" />

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>Criminal Defense</h2>
          <p>Expert representation for criminal defense cases</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="practice-detailed-content">
          <div className="practice-main-image-container">
            <Image 
              src="/photos/criminal.jpg" 
              alt="Criminal Defense Lawyers" 
              width={600} 
              height={400}
              className="practice-main-image"
            />
          </div>
          
          <div className="practice-text-content">
            <h1 className="practice-title">Criminal Defense Attorney & Lawyer</h1>
            
            <div className="practice-description">
              <p>
                When achieving the best possible results for their clients, The Law Offices of {firmName} believes in hard work and dedication. There is no substitution for trying to receive successful results as criminal defense attorneys. Many of the successful outcomes we have been able to give our clients include a withdrawal of charges, an acquittal after trial, negotiated reductions of charges or sentences, and many more. When we first meet our clients, we take the time to educate them on their rights as a criminal defendant. From there, we can aggressively defend their rights when going to trial, at detention hearings, preliminary hearings, bond hearings, appeals, and in many other circumstances. When choosing The Law Offices of {firmName}, there will be no doubt in your mind that our firm will do whatever is necessary to improve your chance for making the outcome successful.
              </p>
              
              <p>
                Our highly-experienced and trusted law firm offers a vast list of practice areas including drug charges, traffic violations, sex crimes, juvenile offenses, identity theft, property crimes, violent crimes, weapons charges, expungements and pardons, theft crimes and assault charges. Even though some of these charges may seem to be minor, they will no doubt have a serious impact on a defendant's life. That is why it is vital that you contact the Law Offices of {firmName}.
              </p>
              
              <p>
                When facing criminal charges, most people do not know what to expect, or understand what possible outcomes their case could present. After speaking with one of the experienced criminal defense lawyers from The Law Offices of {firmName}, you will know that your case is in the hands of someone who knows how to handle the most complex law issues. No matter what type of charges you are facing or how serious they may be, make your future safe by choosing The Law Offices of {firmName}.
              </p>
              
              <p>
                A criminal defense attorney representing our firm will be happy to assess your situation and advise you on what steps to take while dealing with your criminal charges. Our firm has helped individuals by providing legal representation in Philadelphia, Bucks and Montgomery County and throughout many other areas in Pennsylvania.
              </p>
              
              <p>
                If you or a loved one has been involved with a criminal offense, call our offices today. We will handle the rest!
              </p>
            </div>

            <div className="practice-action">
              <Link href="/contact" className="practice-cta-btn">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Sidebar */}
      <section className="section practice-why-choose">
        <div className="about-content">
          <div className="about-text">
            <div className="content-title-section">
              <h2 className="content-title">Our Service Areas</h2>
              <div className="accent-bar"></div>
            </div>
            
            <div className="content-text-blocks">
              <div className="highlight-box blue-highlight">
                <h3 className="highlight-title">Practice Areas</h3>
                <ul className="highlight-list">
                  <li><Link href="/practice/personal-injury">Personal Injury</Link></li>
                  <li><Link href="/practice/auto-accidents">Auto Accidents</Link></li>
                  <li><Link href="/practice/motorcycle-accidents">Motorcycle Accidents</Link></li>
                  <li><Link href="/practice/truck-accidents">Truck Accidents</Link></li>
                  <li><Link href="/practice/premises-liability">Premises Liability</Link></li>
                  <li><Link href="/practice/medical-malpractice">Medical Malpractice</Link></li>
                  <li><Link href="/practice/defective-products">Defective Products</Link></li>
                  <li><Link href="/practice/workers-compensation">Workers' Compensation</Link></li>
                  <li><Link href="/practice/family-law">Divorce/ Family Law/ Custody</Link></li>
                  <li><Link href="/practice/criminal-defense">Criminal Defense</Link></li>
                  <li><Link href="/practice/social-security-disability">Social Security Disability</Link></li>
                  <li><Link href="/practice/general-legal-matters">General Legal Matters</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="sidebar-box contact-form-box">
              <h3 className="sidebar-title">Get Free Consultation</h3>
              <p className="text-center mb-4">Contact us today for a free consultation about your case.</p>
              <Link href="/contact" className="submit-btn w-full text-center">
                Contact Us Now
              </Link>
            </div>

            <div className="sidebar-box quick-contact-box">
              <h3 className="sidebar-title">Quick Contact</h3>
              <div className="quick-contact-content">
                <p>Need immediate assistance? Call us now!</p>
                <a href="tel:215-259-5958" className="phone-cta-btn">215-259-5958</a>
                <p className="quick-contact-note">Available 24/7 for emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 