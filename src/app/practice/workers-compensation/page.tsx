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

export default function WorkersCompensationPage() {
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
            <h2>Workers' Compensation</h2>
            <p>Expert representation for workers' compensation cases</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="practice-detailed-content">
            <div className="practice-main-image-container">
              <Image 
                src="/photos/workers-comp.jpg" 
                alt="Workers' Compensation Lawyers" 
                width={600} 
                height={400}
                className="practice-main-image"
              />
            </div>
            
            <div className="practice-text-content">
              <h1 className="practice-title">Workers' Compensation Attorney & Lawyer</h1>
              <div className="practice-subtitle">
                <p>Free Initial Consultation</p>
                <p>No Fee if No Recovery!</p>
              </div>
              
              <div className="practice-service-area">
                <p><strong>Serving Philadelphia, New Jersey, Pennsylvania, especially Bucks County, Montgomery County, Delaware County, Mercer County, Camden County, Atlantic County, and Burlington County</strong></p>
              </div>
              
              <div className="practice-description">
                <p>
                  Workers' compensation laws are designed to provide benefits to employees who are injured on the job. Our workers' compensation attorneys help injured workers navigate the complex legal process and ensure they receive the benefits they deserve. At {firmName}, we have extensive experience representing workers' compensation claimants.
                </p>
                
                <p>
                  Workers' compensation cases can involve various types of workplace injuries including repetitive stress injuries, occupational diseases, construction accidents, and more. Our attorneys understand the specific requirements and deadlines that apply to workers' compensation claims and will ensure your case is properly filed and pursued.
                </p>
                
                <p>
                  We understand that being injured at work can be stressful and overwhelming. Our attorneys will handle all aspects of your workers' compensation case while you focus on your recovery. We'll work to ensure you receive medical treatment, wage replacement benefits, and any other benefits you're entitled to under the law.
                </p>
              </div>

              <div className="practice-features">
                <h2 className="features-title">Workers' Compensation Services We Provide:</h2>
                <div className="features-list">
                  <div className="feature-item">
                    <h3>Workplace Injury Claims</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Occupational Disease Claims</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Repetitive Stress Injuries</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Construction Accidents</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Medical Treatment Disputes</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Wage Replacement Benefits</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Permanent Disability Claims</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Workers' Compensation Appeals</h3>
                  </div>
                </div>
              </div>

              <div className="practice-description">
                <p>
                  Workers' compensation cases require specialized knowledge of state and federal laws, insurance company tactics, and the medical aspects of workplace injuries. Our attorneys are prepared to handle these complex cases and fight for the benefits you deserve.
                </p>
                
                <p>
                  We understand that insurance companies often try to deny or minimize workers' compensation claims. Our attorneys are experienced in countering these tactics and will fight to ensure you receive full and fair compensation for your workplace injury.
                </p>
                
                <p>
                  If you've been injured at work, don't wait to get the legal help you need. Contact {firmName} today for a free consultation. We're here to help you navigate the workers' compensation process and ensure you receive the benefits you deserve.
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
            src="/photos/workers-comp.jpg"
            alt="Workers' Compensation Lawyers"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 40%' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>Workers' Compensation</h1>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>Expert representation for workers' compensation cases</p>
          </div>
        </section>

        {/* Mobile Main Content */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Workers' Compensation Attorney & Lawyer</h2>
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <p className="text-sm font-semibold text-blue-900 mb-2">Free Initial Consultation</p>
              <p className="text-sm font-semibold text-blue-900">No Fee if No Recovery!</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
              <p className="text-sm text-gray-700 font-medium">
                <strong>Serving Philadelphia, New Jersey, Pennsylvania, especially Bucks County, Montgomery County, Delaware County, Mercer County, Camden County, Atlantic County, and Burlington County</strong>
              </p>
            </div>
            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>Workers' compensation laws are designed to provide benefits to employees who are injured on the job. Our workers' compensation attorneys help injured workers navigate the complex legal process and ensure they receive the benefits they deserve. At {firmName}, we have extensive experience representing workers' compensation claimants.</p>
              <p>Workers' compensation cases can involve various types of workplace injuries including repetitive stress injuries, occupational diseases, construction accidents, and more. Our attorneys understand the specific requirements and deadlines that apply to workers' compensation claims and will ensure your case is properly filed and pursued.</p>
              <p>We understand that being injured at work can be stressful and overwhelming. Our attorneys will handle all aspects of your workers' compensation case while you focus on your recovery. We'll work to ensure you receive medical treatment, wage replacement benefits, and any other benefits you're entitled to under the law.</p>
            </div>

            {/* Mobile Services */}
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Workers' Compensation Services We Provide:</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Workplace Injury Claims",
                  "Occupational Disease Claims",
                  "Repetitive Stress Injuries",
                  "Construction Accidents",
                  "Medical Treatment Disputes",
                  "Wage Replacement Benefits",
                  "Permanent Disability Claims",
                  "Workers' Compensation Appeals"
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <span className="text-gray-800 text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>Workers' compensation cases require specialized knowledge of state and federal laws, insurance company tactics, and the medical aspects of workplace injuries. Our attorneys are prepared to handle these complex cases and fight for the benefits you deserve.</p>
              <p>We understand that insurance companies often try to deny or minimize workers' compensation claims. Our attorneys are experienced in countering these tactics and will fight to ensure you receive full and fair compensation for your workplace injury.</p>
              <p>If you've been injured at work, don't wait to get the legal help you need. Contact {firmName} today for a free consultation. We're here to help you navigate the workers' compensation process and ensure you receive the benefits you deserve.</p>
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