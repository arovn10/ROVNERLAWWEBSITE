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

export default function FamilyLawPage() {
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
            <h2>Family Law</h2>
            <p>Expert representation for family law matters</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="practice-detailed-content">
            <div className="practice-main-image-container">
              <Image 
                src="/photos/general.jpg" 
                alt="Family Law Lawyers" 
                width={600} 
                height={400}
                className="practice-main-image"
              />
            </div>
            
            <div className="practice-text-content">
              <h1 className="practice-title">Family Law Attorney & Lawyer</h1>
              <div className="practice-subtitle">
                <p>Free Initial Consultation</p>
                <p>Compassionate Legal Representation</p>
              </div>
              
              <div className="practice-service-area">
                <p><strong>Serving Philadelphia, New Jersey, Pennsylvania, especially Bucks County, Montgomery County, Delaware County, Mercer County, Camden County, Atlantic County, and Burlington County</strong></p>
              </div>
              
              <div className="practice-description">
                <p>
                  Family law matters can be emotionally challenging and legally complex. Our family law attorneys provide compassionate, experienced representation for all types of family law cases. At {firmName}, we understand that family law issues affect the most important relationships in your life.
                </p>
                
                <p>
                  We handle a wide range of family law matters including divorce, child custody, child support, alimony, property division, and adoption. Our attorneys work to resolve family law disputes through negotiation and mediation whenever possible, but we're prepared to litigate when necessary to protect your rights and the best interests of your children.
                </p>
                
                <p>
                  Our family law team is committed to helping you navigate the legal process with dignity and respect. We'll work tirelessly to achieve the best possible outcome for you and your family.
                </p>
              </div>

              <div className="practice-features">
                <h2 className="features-title">Family Law Services We Provide:</h2>
                <div className="features-list">
                  <div className="feature-item">
                    <h3>Divorce and Separation</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Child Custody and Visitation</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Child Support</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Alimony and Spousal Support</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Property Division</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Adoption</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Prenuptial Agreements</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Domestic Violence Protection</h3>
                  </div>
                </div>
              </div>

              <div className="practice-description">
                <p>
                  Family law cases require a delicate balance of legal expertise and emotional sensitivity. Our attorneys understand the stress and uncertainty that family law matters can create, and we're here to guide you through the process with care and professionalism.
                </p>
                
                <p>
                  We believe in finding practical solutions that work for your family's unique situation. Whether you're going through a divorce, fighting for custody of your children, or need help with child support, our attorneys will advocate for your rights while keeping your family's best interests in mind.
                </p>
                
                <p>
                  If you're facing a family law issue, don't face it alone. Contact {firmName} today for a free consultation. We're here to help you protect your rights and secure the best possible outcome for your family.
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
            src="/photos/general.jpg"
            alt="Family Law Lawyers"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 40%' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>Family Law</h1>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>Expert representation for family law matters</p>
          </div>
        </section>

        {/* Mobile Main Content */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Family Law Attorney & Lawyer</h2>
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <p className="text-sm font-semibold text-blue-900 mb-2">Free Initial Consultation</p>
              <p className="text-sm font-semibold text-blue-900">Compassionate Legal Representation</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
              <p className="text-sm text-gray-700 font-medium">
                <strong>Serving Philadelphia, New Jersey, Pennsylvania, especially Bucks County, Montgomery County, Delaware County, Mercer County, Camden County, Atlantic County, and Burlington County</strong>
              </p>
            </div>
            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>Family law matters can be emotionally challenging and legally complex. Our family law attorneys provide compassionate, experienced representation for all types of family law cases. At {firmName}, we understand that family law issues affect the most important relationships in your life.</p>
              <p>We handle a wide range of family law matters including divorce, child custody, child support, alimony, property division, and adoption. Our attorneys work to resolve family law disputes through negotiation and mediation whenever possible, but we're prepared to litigate when necessary to protect your rights and the best interests of your children.</p>
              <p>Our family law team is committed to helping you navigate the legal process with dignity and respect. We'll work tirelessly to achieve the best possible outcome for you and your family.</p>
            </div>

            {/* Mobile Services */}
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Family Law Services We Provide:</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Divorce and Separation",
                  "Child Custody and Visitation",
                  "Child Support",
                  "Alimony and Spousal Support",
                  "Property Division",
                  "Adoption",
                  "Prenuptial Agreements",
                  "Domestic Violence Protection"
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <span className="text-gray-800 text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>Family law cases require a delicate balance of legal expertise and emotional sensitivity. Our attorneys understand the stress and uncertainty that family law matters can create, and we're here to guide you through the process with care and professionalism.</p>
              <p>We believe in finding practical solutions that work for your family's unique situation. Whether you're going through a divorce, fighting for custody of your children, or need help with child support, our attorneys will advocate for your rights while keeping your family's best interests in mind.</p>
              <p>If you're facing a family law issue, don't face it alone. Contact {firmName} today for a free consultation. We're here to help you protect your rights and secure the best possible outcome for your family.</p>
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