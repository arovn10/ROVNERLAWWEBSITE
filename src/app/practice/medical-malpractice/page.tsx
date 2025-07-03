"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';
import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function MedicalMalpracticePage() {
  const { firmName } = useFirmName();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Desktop Header/Nav */}
      <div className="hidden lg:block w-full">
        <Header currentPage="practice" />
      </div>
      {/* Mobile Header/Nav */}
      <div className="block lg:hidden w-full">
        <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block">
        {/* Hero Section */}
        <section className="hero-professional">
          <div className="hero-content">
            <h2>Medical Malpractice</h2>
            <p>Expert representation for medical malpractice victims</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="practice-detailed-content">
            <div className="practice-main-image-container">
              <Image 
                src="/photos/medical.jpg" 
                alt="Medical Malpractice Lawyers" 
                width={600} 
                height={400}
                className="practice-main-image"
              />
            </div>
            
            <div className="practice-text-content">
              <h1 className="practice-title">Medical Malpractice Attorney & Lawyer</h1>
              
              <div className="practice-service-areas">
                <h2 className="service-areas-title">Our Service Areas</h2>
                <div className="service-areas-list">
                  <p>PHILADELPHIA MEDICAL MALPRACTICE ATTORNEY</p>
                  <p>BUCKS COUNTY MEDICAL MALPRACTICE ATTORNEY</p>
                  <p>MONTGOMERY COUNTY MEDICAL MALPRACTICE ATTORNEY</p>
                  <p>SOUTH JERSEY MEDICAL MALPRACTICE ATTORNEY</p>
                  <p>NEW JERSEY MEDICAL MALPRACTICE ATTORNEY</p>
                </div>
              </div>
              
              <div className="practice-description">
                <p>
                  Most medical workers are responsible professionals who are committed to their patients. However, even well-meaning doctors make mistakes that can have a devastating effect on a patient's health. In fact, preventable medical errors cause as many as 195,000 patient deaths each year in U.S. hospitals, according to a study by HealthGrades, Inc. That would make medical errors the sixth leading cause of death in America and ranking it above highway accidents, breast cancer, or AIDS.
                </p>
                
                <p>
                  If you have been the victim of medical malpractice or if someone you love suffered a wrongful death due to a medical mistake, please contact the law offices of {firmName} today in Philadelphia, Bucks County, Montgomery County, South Jersey and throughout Pennsylvania, New Jersey, and Florida. Our medical malpractice lawyers represent people who have been injured by all types of medical malpractice, including:
                </p>
              </div>

              <div className="practice-features">
                <h2 className="features-title">Types of Medical Malpractice We Handle:</h2>
                <div className="features-list">
                  <div className="feature-item">
                    <h3>Surgical errors</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Misdiagnosis</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Drug dispensing errors</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Nursing mistakes</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Failure to diagnose cancer</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Birth injury</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Operating on the wrong body part</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Instruments left behind</h3>
                  </div>
                </div>
              </div>

              <div className="practice-description">
                <p>
                  When dealing with both the fields of medicine and the law, it can be nearly impossible for a health care consumer to determine what happened and who is at fault. Our Philadelphia Medical Malpractice Lawyers will gather your medical records and have them reviewed by an independent medical expert to determine if your physician failed to follow proper practices or if the hospital or other health care facility disregarded regulations or standards of care. If you were a victim of medical malpractice, we will aggressively pursue financial compensation for your injuries, lost wages, pain and suffering, and medical bills.
                </p>
                
                <p>
                  We have won medical malpractice claims for people just like you. Many of them pursue a malpractice lawsuit in order to prevent others from suffering a similar fate. It costs you nothing to determine if you have a valid medical malpractice claim.
                </p>
                
                <p>
                  In addition to providing skilled and experienced legal representation, we offer exceptionally strong client service. We will be readily accessible throughout your case, to answer any questions or address any concerns. We understand that this can be a stressful and overwhelming time — we work to reduce the difficulties of pursuing legal action. The {firmName} law firm approaches every medical malpractice case as though it were going to trial. Meanwhile in many cases our lawyers are able to resolve the matters by negotiating acceptable, even generous, settlement agreements, always looking out for the best interests of our client.
                </p>
                
                <p>
                  If you or a love one has suffered a medical malpractice injury or wrongful death due to the medical mistake of others, our personal injury lawyers are prepared to evaluate your claim and help you get fair compensation for your loss. Please contact the law offices of {firmName} today in Philadelphia, Bucks County, Montgomery County, South Jersey and throughout Pennsylvania, New Jersey, and Florida.
                </p>
                
                <p>
                  At the law offices of {firmName}, "We Get Results!". If you or a loved one has been injured by a medical mistake, contact us today for a free consultation to confidentially speak with one of our attorneys. All you need is to call and leave the rest to us.
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
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <Image
            src="/photos/medical.jpg"
            alt="Medical Malpractice Lawyers"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 40%' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>Medical Malpractice</h1>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>Expert representation for medical malpractice victims</p>
          </div>
        </section>

        {/* Mobile Main Content */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Medical Malpractice Attorney & Lawyer</h2>
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-2 text-lg">Our Service Areas</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "PHILADELPHIA MEDICAL MALPRACTICE ATTORNEY",
                  "BUCKS COUNTY MEDICAL MALPRACTICE ATTORNEY", 
                  "MONTGOMERY COUNTY MEDICAL MALPRACTICE ATTORNEY",
                  "SOUTH JERSEY MEDICAL MALPRACTICE ATTORNEY",
                  "NEW JERSEY MEDICAL MALPRACTICE ATTORNEY"
                ].map((area, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <span className="text-gray-800 text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>Most medical workers are responsible professionals who are committed to their patients. However, even well-meaning doctors make mistakes that can have a devastating effect on a patient's health. In fact, preventable medical errors cause as many as 195,000 patient deaths each year in U.S. hospitals, according to a study by HealthGrades, Inc. That would make medical errors the sixth leading cause of death in America and ranking it above highway accidents, breast cancer, or AIDS.</p>
              <p>If you have been the victim of medical malpractice or if someone you love suffered a wrongful death due to a medical mistake, please contact the law offices of {firmName} today in Philadelphia, Bucks County, Montgomery County, South Jersey and throughout Pennsylvania, New Jersey, and Florida. Our medical malpractice lawyers represent people who have been injured by all types of medical malpractice, including:</p>
            </div>

            {/* Mobile Types of Malpractice */}
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Types of Medical Malpractice We Handle:</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Surgical errors",
                  "Misdiagnosis",
                  "Drug dispensing errors",
                  "Nursing mistakes",
                  "Failure to diagnose cancer",
                  "Birth injury",
                  "Operating on the wrong body part",
                  "Instruments left behind"
                ].map((type, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <span className="text-gray-800 text-sm font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>When dealing with both the fields of medicine and the law, it can be nearly impossible for a health care consumer to determine what happened and who is at fault. Our Philadelphia Medical Malpractice Lawyers will gather your medical records and have them reviewed by an independent medical expert to determine if your physician failed to follow proper practices or if the hospital or other health care facility disregarded regulations or standards of care. If you were a victim of medical malpractice, we will aggressively pursue financial compensation for your injuries, lost wages, pain and suffering, and medical bills.</p>
              <p>We have won medical malpractice claims for people just like you. Many of them pursue a malpractice lawsuit in order to prevent others from suffering a similar fate. It costs you nothing to determine if you have a valid medical malpractice claim.</p>
              <p>In addition to providing skilled and experienced legal representation, we offer exceptionally strong client service. We will be readily accessible throughout your case, to answer any questions or address any concerns. We understand that this can be a stressful and overwhelming time — we work to reduce the difficulties of pursuing legal action. The {firmName} law firm approaches every medical malpractice case as though it were going to trial. Meanwhile in many cases our lawyers are able to resolve the matters by negotiating acceptable, even generous, settlement agreements, always looking out for the best interests of our client.</p>
              <p>If you or a love one has suffered a medical malpractice injury or wrongful death due to the medical mistake of others, our personal injury lawyers are prepared to evaluate your claim and help you get fair compensation for your loss. Please contact the law offices of {firmName} today in Philadelphia, Bucks County, Montgomery County, South Jersey and throughout Pennsylvania, New Jersey, and Florida.</p>
              <p>At the law offices of {firmName}, "We Get Results!". If you or a loved one has been injured by a medical mistake, contact us today for a free consultation to confidentially speak with one of our attorneys. All you need is to call and leave the rest to us.</p>
            </div>
          </div>
        </section>

        {/* Mobile Quick Access */}
        <section className="px-4 pt-4 pb-2">
          <h3 className="text-lg font-bold mb-3 text-blue-900">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <a href="/attorneys" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">👥</div>
              <div className="font-semibold text-gray-800 text-sm">Our Attorneys</div>
            </a>
            <a href="/contact" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📞</div>
              <div className="font-semibold text-gray-800 text-sm">Contact Us</div>
            </a>
            <a href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📍</div>
              <div className="font-semibold text-gray-800 text-sm">Locations</div>
            </a>
            <a href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">⚖️</div>
              <div className="font-semibold text-gray-800 text-sm">Practice Areas</div>
            </a>
          </div>
        </section>

        {/* Mobile Free Consultation */}
        <section className="px-4 pt-4 pb-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col gap-3 p-4 items-center">
            <a href="/contact" className="w-full bg-green-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-green-700 transition flex items-center justify-center gap-2">
              <Mail size={20} />
              Free Consultation
            </a>
            <a href="tel:215-259-5958" className="w-full bg-blue-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <Phone size={20} />
              Call 215-259-5958
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
} 