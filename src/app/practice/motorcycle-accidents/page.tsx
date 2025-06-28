"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFirmName } from '@/lib/FirmNameContext';

export default function MotorcycleAccidentsPage() {
  const { firmName } = useFirmName();

  return (
    <div>
      <Header currentPage="practice" />

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>Motorcycle Accidents</h2>
          <p>Expert representation for motorcycle accident victims</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="practice-detailed-content">
          <div className="practice-main-image-container">
            <Image 
              src="/photos/motorcycle.jpg" 
              alt="Motorcycle Accident Lawyers" 
              width={600} 
              height={400}
              className="practice-main-image"
            />
          </div>
          
          <div className="practice-text-content">
            <h1 className="practice-title">Motorcycle Accident Lawyers</h1>
            
            <div className="practice-service-areas">
              <h2 className="service-areas-title">Our Service Areas</h2>
              <div className="service-areas-list">
                <p>PHILADELPHIA MOTORCYCLE ACCIDENT ATTORNEY</p>
                <p>BUCKS COUNTY MOTORCYCLE ACCIDENT ATTORNEY</p>
                <p>MONTGOMERY COUNTY MOTORCYCLE ACCIDENT ATTORNEY</p>
                <p>SOUTH JERSEY MOTORCYCLE ACCIDENT ATTORNEY</p>
                <p>NEW JERSEY MOTORCYCLE ACCIDENT ATTORNEY</p>
                <p>PENNSYLVANIA MOTORCYCLE ACCIDENT ATTORNEY</p>
              </div>
            </div>
            
            <div className="practice-description">
              <p>
                According to recent statistics compiled by the Pennsylvania Department of Transportation, between 2000 and 2009, the number of licensed motorcyclists has increased 23% to 828,245, while at the same time the number of registered motorcycles has increased 45% to 393,042. With all of these new riders and bikes on the roadways, serious accidents are on the increase. Despite the rider taking the necessary precautions motorcycle accidents can happen due to the negligence of other parties. Unlike cars and other vehicles, motorcycles offer drivers and passengers no protection. There is nothing between the rider and the open road other than the clothes the rider is wearing and possibly a helmet. Motorcycle accidents often happen due to the negligent party's failure to recognize the motorcyclist, failing to yield the right of way to the motorcyclist, or simply not obeying the rules of the road while operating their vehicle. Due to a motorcyclist's physical exposure while riding their motorcycle, accidents can have catastrophic consequences.
              </p>
              
              <p>
                If you are a motorcyclist that has been involved in a motorcycle accident in Philadelphia, Bucks County, Montgomery County, South Jersey and throughout Pennsylvania, New Jersey, and Florida, contact the motorcycle accident lawyers at the law offices of {firmName} for a free consultation on how to obtain compensation for your injuries. Our firm has over 40 years of experience representing motor cycle accident victims throughout Philadelphia, Bucks County, Montgomery County, South Jersey and throughout Pennsylvania, New Jersey, and Florida. Victims can recover lost wages and future earnings, medical bills and projected health care costs, as well as damages for pain and suffering, and loss of enjoyment of life. In fatal motorcycle crashes, we help surviving family members sue for wrongful death damages lost earnings, lost financial support, loss of consortium, and emotional pain.
              </p>
            </div>

            <div className="practice-features">
              <h2 className="features-title">Many different types of injuries can result from a motorcycle accident, including:</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>Broken bones</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Severe brain damage and head injuries</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Back, neck, and spinal cord injuries (including paralysis)</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Road rash</h3>
                </div>
              </div>
            </div>

            <div className="practice-description">
              <p>
                At the Law Offices of {firmName}, our motorcycle accident lawyers work with a variety of experts who assist us in investigation, accident reconstruction, crashworthiness testing, and in obtaining and reviewing witness testimony to vigorously pursue ALL liable parties and to maximize compensation for our client, especially if alcohol and drunk driving were involved.
              </p>
              
              <p>
                If you've been seriously injured in a motorcycle crash or have a family member who has suffered a head injury as the result of a motorcycle wreck contact our law offices toll-free or via e-mail for a free consultation. All motorcycle accidents claims are taken on a contingency basis; you pay no fees unless we make a recovery for you. Contact us today for a free consultation.
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