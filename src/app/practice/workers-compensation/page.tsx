"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFirmName } from '@/lib/FirmNameContext';

export default function WorkersCompensationPage() {
  const { firmName } = useFirmName();

  return (
    <div>
      <Header currentPage="practice" />

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>Workers' Compensation</h2>
          <p>Expert representation for workplace injury victims</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="practice-detailed-content">
          <div className="practice-main-image-container">
            <Image 
              src="/photos/workers-comp.jpg" 
              alt="Workers Compensation Lawyers" 
              width={600} 
              height={400}
              className="practice-main-image"
            />
          </div>
          
          <div className="practice-text-content">
            <h1 className="practice-title">Workers Compensation Attorney Philadelphia</h1>
            
            <div className="practice-description">
              <h2>What is Worker's compensation?</h2>
              
              <p>
                Under worker's compensation laws, employees who are injured or disabled on the job, regardless of fault, are provided with fixed monetary benefits for lost wages and medical bills. The dependants of those workers who are killed due to work-related accidents or illnesses are also compensated through this law.
              </p>
              
              <p>
                The workers compensation law is well-structured to cover injuries that occur in the workplace and while working. This automatic work coverage is mandatory whenever anyone is injured on the job, regardless of fault, and is the basic right of every legitimately employed citizen. When you are on the job, you are always protected.
              </p>
              
              <p>
                To learn your rights, and so you do not lose your rights, it is important that you contact an experienced workers compensation lawyer like those at the {firmName} to discuss your situation, and to obtain the compensation you deserve. The injuries you sustain may be any type ranging from simple to complex. The injuries can be as diverse as:
              </p>
            </div>

            <div className="practice-features">
              <h2 className="features-title">Types of Workplace Injuries We Handle:</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>Loss of Life</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Back Injury</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Broken Bones</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Temporary or Permanent Disability</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Loss of Limb, Hearing, or Sight</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Carpal Tunnel Syndrome</h3>
                </div>
              </div>
            </div>

            <div className="practice-description">
              <p>
                In any workplace injury, you also may have claims against responsible parties that are not connected to your employer for which cases can be raised for pain and suffering and other damages that are not covered under workers compensation laws. On the job, injuries can happen for a number of reasons. They may be due to defective equipment or product, falling objects, motor vehicle accidents, or due to an outside contractor at the work premises. If you are in need of a workers compensation lawyer, a skilled legal team of lawyers such as {firmName} will aggressively and competently seek the maximum amount due from all responsible parties. We can also evaluate and discuss the complex types of claims which are available to an injured worker.
              </p>
              
              <p>
                We, at {firmName}, provide you with the justice you deserve. Our attorneys have enjoyed noted and remarkable success in securing workers compensation awards to our clients to cover their lifetime medical care and income benefits. To secure the compensation you deserve for workplace injuries, our attorneys will be there for you at every stage of the case from the filing of your claim to the end, to attain the best possible result.
              </p>
              
              <p>
                Contact us if you or a loved one has been injured on the job and are in need of a workers compensation attorney in the Philadelphia area and beyond. At {firmName}, "We Get Results".
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 