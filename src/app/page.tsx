"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { groupSettlementsForCarousel, type Settlement } from '@/data/settlements';

export default function HomePage() {
  const [firmName, setFirmName] = useState('Law Firm');
  const [currentSettlementGroup, setCurrentSettlementGroup] = useState(0);
  const settlementGroups = groupSettlementsForCarousel(3);

  useEffect(() => {
    fetch('/api/settings/firm-name')
      .then(res => res.json())
      .then(data => {
        if (data.firmName) setFirmName(data.firmName);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSettlementGroup((prev) => (prev + 1) % settlementGroups.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [settlementGroups.length]);

  const nextGroup = () => {
    setCurrentSettlementGroup((prev) => (prev + 1) % settlementGroups.length);
  };

  const prevGroup = () => {
    setCurrentSettlementGroup((prev) => (prev - 1 + settlementGroups.length) % settlementGroups.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center font-sans">
      <Header firmName={firmName} />
      {/* Navigation Cards */}
      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-16 px-6">
        <Link href="/about" className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 p-10 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all">
          <span className="text-3xl font-bold text-blue-600 mb-4">About Us</span>
          <p className="text-gray-600 text-center">Learn about our firm's history, values, and commitment to clients.</p>
        </Link>
        <Link href="/practice" className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 p-10 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all">
          <span className="text-3xl font-bold text-green-600 mb-4">Practice Areas</span>
          <p className="text-gray-600 text-center">Explore the areas of law we specialize in, from injury to family law.</p>
        </Link>
        <Link href="/photo-gallery" className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 p-10 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all">
          <span className="text-3xl font-bold text-purple-600 mb-4">Photo Gallery</span>
          <p className="text-gray-600 text-center">See our team in action and our community involvement.</p>
        </Link>
        <Link href="/in-the-news" className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 p-10 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all">
          <span className="text-3xl font-bold text-yellow-600 mb-4">In the News</span>
          <p className="text-gray-600 text-center">Read about our firm's impact and media coverage.</p>
        </Link>
        <Link href="/locations" className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 p-10 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all">
          <span className="text-3xl font-bold text-pink-600 mb-4">Locations</span>
          <p className="text-gray-600 text-center">Find our offices and get directions to meet with us.</p>
        </Link>
        <Link href="/contact" className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 p-10 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all">
          <span className="text-3xl font-bold text-blue-600 mb-4">Contact</span>
          <p className="text-gray-600 text-center">Reach out for a free consultation or to ask a question.</p>
        </Link>
      </section>
      {/* Hero Banner with Professional Home Image - Using Alternative Banner */}
      <section className="hero-professional">
        <div className="hero-image-overlay">
          <Image 
            src="/photos/banner-home-new-1-1024x343.png" 
            alt="Professional Law Firm" 
            width={1024}
            height={343}
            className="hero-background"
            priority
            style={{ objectPosition: 'center right', objectFit: 'cover' }}
          />
        </div>
        <div className="hero-content">
          <h2>RECENT SETTLEMENTS & VERDICTS</h2>
          <p>Over 40 Years of Fighting for Our Clients</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">40+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Attorneys</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">$50M+</span>
              <span className="stat-label">Recovered for Clients</span>
            </div>
          </div>
        </div>
      </section>
      {/* Settlement Carousel - 3 at a time without images */}
      <section className="section">
        <div className="section-title">
          <h3>Recent Results</h3>
          <p>We get results for our clients</p>
        </div>
        
        <div className="carousel-container">
          <button className="carousel-btn prev-btn" onClick={prevGroup}>
            &#8249;
          </button>
          
          <div className="settlements-carousel">
            <div className="grid grid-3">
              {settlementGroups[currentSettlementGroup]?.map((settlement: Settlement) => (
                <div key={settlement.id} className="card settlement-card">
                  <div className="settlement-icon">
                    <div className="settlement-symbol">$</div>
                  </div>
                  <div className="settlement-amount">{settlement.amount}</div>
                  <div className="settlement-type">{settlement.caseType}</div>
                  {settlement.practice_area && (
                    <div className="settlement-practice-area">{settlement.practice_area}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-btn next-btn" onClick={nextGroup}>
            &#8250;
          </button>
        </div>
        
        <div className="carousel-indicators">
          {settlementGroups.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSettlementGroup ? 'active' : ''}`}
              onClick={() => setCurrentSettlementGroup(index)}
            />
          ))}
        </div>
      </section>
      {/* Practice Areas with Correctly Named Professional Images */}
      <section className="section">
        <div className="section-title">
          <h3>Our Practice Areas</h3>
          <p>Comprehensive legal services with proven results</p>
        </div>
        <div className="grid grid-4">
          {/* Auto Accidents */}
          <div className="card practice-card-enhanced">
            <div className="practice-image-container">
              <Image 
                src="/photos/auto-accidents.jpg" 
                alt="Auto Accidents" 
                width={400} 
                height={200}
                className="practice-image"
              />
            </div>
            <div className="practice-content">
              <div className="practice-icon icon-blue">⚖</div>
              <h3 className="practice-title">AUTO ACCIDENTS</h3>
              <p className="practice-description">
                No Fee if No Recovery! If you have been injured in a motor vehicle accident, we can help you understand your legal options and develop a strategy for maximizing compensation.
              </p>
              <Link href="/practice" className="learn-more-btn">LEARN MORE</Link>
            </div>
          </div>

          {/* Personal Injury */}
          <div className="card practice-card-enhanced">
            <div className="practice-image-container">
              <Image 
                src="/photos/personal-inury.jpg" 
                alt="Personal Injury" 
                width={400} 
                height={200}
                className="practice-image"
              />
            </div>
            <div className="practice-content">
              <div className="practice-icon icon-red">✓</div>
              <h3 className="practice-title">PERSONAL INJURY</h3>
              <p className="practice-description">
                Our team of over 15 lawyers plus our paralegals, investigators, experts, all with hundreds of years of combined experience, put us at the top of the legal profession.
              </p>
              <Link href="/practice" className="learn-more-btn">LEARN MORE</Link>
            </div>
          </div>

          {/* Medical Malpractice */}
          <div className="card practice-card-enhanced">
            <div className="practice-image-container">
              <Image 
                src="/photos/medical.jpg" 
                alt="Medical Malpractice" 
                width={400} 
                height={200}
                className="practice-image"
              />
            </div>
            <div className="practice-content">
              <div className="practice-icon icon-green">✤</div>
              <h3 className="practice-title">MEDICAL MALPRACTICE</h3>
              <p className="practice-description">
                Even well-meaning doctors make mistakes that can have a devastating effect on a patient's health. If you or someone you love has been a victim of medical malpractice contact us today.
              </p>
              <Link href="/practice" className="learn-more-btn">LEARN MORE</Link>
            </div>
          </div>

          {/* Premises Liability */}
          <div className="card practice-card-enhanced">
            <div className="practice-image-container">
              <Image 
                src="/photos/premises.jpg" 
                alt="Premises Liability" 
                width={400} 
                height={200}
                className="practice-image"
              />
            </div>
            <div className="practice-content">
              <div className="practice-icon icon-purple">◊</div>
              <h3 className="practice-title">PREMISES LIABILITY</h3>
              <p className="practice-description">
                Property owners, landlords and property managers have an obligation to keep their premises safe. If they fail to do so, they may be liable for the damages, losses and injuries they've caused.
              </p>
              <Link href="/practice" className="learn-more-btn">LEARN MORE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional About Section with Correct Banner (1024x128) */}
      <section className="section about-preview">
        <div className="about-content">
          <div className="about-text">
            <h2 className="content-title">Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h2>
            <div className="accent-bar"></div>
            <h3 className="content-subtitle">Premier Injury Lawyers</h3>
            <p className="content-text">
              For over 40 years, the Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt have been fighting for clients in Philadelphia who have been victims of negligence, auto accidents, personal injury, medical malpractice and premise liability.
            </p>
            <div className="firm-highlights">
              <div className="highlight-item">
                <span className="highlight-number">40+</span>
                <span className="highlight-text">Years of Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">15+</span>
                <span className="highlight-text">Skilled Attorneys</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">1000+</span>
                <span className="highlight-text">Cases Won</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <Image 
              src="/photos/banner-about2-1024x128.png" 
              alt="About Our Law Firm" 
              width={512} 
              height={64}
              className="about-firm-image"
            />
          </div>
        </div>
      </section>

      {/* Quick Links Section with Properly Sized QuickLink Images */}
      <section className="section quick-links">
        <div className="section-title">
          <h3>Quick Access</h3>
          <p>Get the help you need quickly</p>
        </div>
        <div className="grid grid-4">
          <Link href="/contact" className="quick-link-card">
            <Image 
              src="/photos/quicklink-1-1.png" 
              alt="Free Consultation" 
              width={64} 
              height={64}
              className="quick-link-icon"
            />
            <h4>Free Consultation</h4>
            <p>Get expert legal advice at no cost</p>
          </Link>
          <Link href="/attorneys" className="quick-link-card">
            <Image 
              src="/photos/quicklink-2-1.png" 
              alt="Our Attorneys" 
              width={64} 
              height={64}
              className="quick-link-icon"
            />
            <h4>Our Attorneys</h4>
            <p>Meet our experienced legal team</p>
          </Link>
          <Link href="/practice" className="quick-link-card">
            <Image 
              src="/photos/quicklink-3-1.png" 
              alt="Practice Areas" 
              width={64} 
              height={64}
              className="quick-link-icon"
            />
            <h4>Practice Areas</h4>
            <p>Comprehensive legal services</p>
          </Link>
          <Link href="/contact" className="quick-link-card">
            <Image 
              src="/photos/quicklink-4-1.png" 
              alt="Contact Us" 
              width={64} 
              height={64}
              className="quick-link-icon"
            />
            <h4>Contact Us</h4>
            <p>Reach out for immediate help</p>
          </Link>
        </div>
      </section>

      {/* SEPTA Feature Section */}
      <section className="section septa-feature">
        <div className="septa-content">
          <div className="septa-text">
            <h3>SEPTA Accident Specialists</h3>
            <p>If you've been injured in a SEPTA bus, train, or trolley accident, our experienced attorneys can help you navigate the complex claims process and secure the compensation you deserve.</p>
            <Link href="/contact" className="septa-cta-btn">Get Help Now</Link>
          </div>
          <div className="septa-image">
            <Image 
              src="/photos/septa-accident-1024x576.jpg" 
              alt="SEPTA Accident Legal Help" 
              width={512} 
              height={288}
              className="septa-accident-image"
            />
          </div>
        </div>
      </section>

      <Footer firmName={firmName} />
    </div>
  );
}
