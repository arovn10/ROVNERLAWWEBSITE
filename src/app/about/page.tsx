"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';
import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

interface AboutUsData {
  id: string;
  heroTitle: string;
  heroSubtitle: string;
  mainTitle: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  blueHighlightTitle: string;
  blueHighlightContent: string;
  paragraph5: string;
  paragraph6: string;
  paragraph7: string;
  goldHighlightTitle: string;
  goldHighlightContent: string;
}

export default function AboutPage() {
  const { firmName } = useFirmName();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutUsData, setAboutUsData] = useState<AboutUsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAboutUsData = async () => {
      try {
        const response = await fetch('/api/about-us');
        if (response.ok) {
          const data = await response.json();
          setAboutUsData(data);
        }
      } catch (error) {
        console.error('Error fetching about us data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutUsData();
  }, []);

  // Use default content if data is not loaded yet
  const content = aboutUsData || {
    heroTitle: "About Our Firm",
    heroSubtitle: firmName,
    mainTitle: firmName,
    paragraph1: "When you are seriously injured there is only one law firm to call. The Law Offices of " + firmName + ". For over 40 years the Rovner Law Firm has been accomplishing its motto of getting results for many thousands of grateful and satisfied clients in Pennsylvania, New Jersey, and Florida.",
    paragraph2: "The firm was founded by former Pennsylvania State Senator and Assistant District Attorney, Robert Rovner. Our team of lawyers and paralegals, investigators, experts, all with hundreds of years of combined experience, put us at the top of the Philadelphia Area legal profession.",
    paragraph3: "Widely recognized as one of the largest and most experienced personal injury law firms handling Wrongful Death Cases, Motor Vehicle Accidents, Premises Accidents, Products Liability, and Medical Malpractice; some of our lawyers also focus their experience in other areas from our Workers Compensation team to Divorce, Child Support, Custody, and Domestic Relations, to Criminal Defense, Social Security/Disability and general legal matters such as Real Estate, Landlord-Tenant, Wills, and Estates.",
    paragraph4: "Our team is always there to meet all of your legal needs from our offices in Pennsylvania and New Jersey serving the entire Philadelphia Metropolitan Area and Southern New Jersey including Pennsylvania State Senator, Bucks and Montgomery Counties.",
    blueHighlightTitle: "When you meet with an unexpected injury",
    blueHighlightContent: "Our injury attorneys are there with experienced support to assist you from the very start. We obtain substantial compensation in accident cases and for injured parties. We Get Results",
    paragraph5: "In addition to providing skilled and experienced legal representation, we offer exceptionally strong client service. We will be readily accessible throughout your case, to answer any questions or address any concerns. We understand that this can be a stressful and overwhelming time and we work to reduce the difficulties of pursuing legal action.",
    paragraph6: "The " + firmName + " law firm approaches every case as though it were going to trial. Meanwhile in many cases our lawyers are able to resolve the matters by negotiating acceptable, even generous, settlement agreements, always looking out for the best interests of our client.",
    paragraph7: "If you or a love one has suffered an injury or wrongful death due to a defective product, our personal injury attorneys are prepared to evaluate your claim and help you get fair compensation for your loss. In other types of legal representation, we are there for you, working in your corner, to obtain the best possible result under the circumstances",
    goldHighlightTitle: "At the law offices of " + firmName + ", \"We Get Results!\"",
    goldHighlightContent: "If you or a loved one has been injured, or is in need of legal representation, contact us today for a free consultation to confidentially speak with one of our attorneys. All you need is to call and leave the rest to us."
  };

  return (
    <div>
      {/* Desktop Header/Nav */}
      <div className="hidden lg:block w-full">
        <Header currentPage="about" />
      </div>
      {/* Mobile Header/Nav */}
      <div className="block lg:hidden w-full">
        <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block">
        {/* Hero Section with Banner Image */}
        <section className="hero-professional">
          <div className="hero-image-overlay">
            <Image 
              src="/photos/bannernewwebsite.png"
              alt="About Our Law Firm" 
              width={1024}
              height={128}
              className="hero-background"
              priority
              style={{ objectPosition: 'center', objectFit: 'cover', height: '100%' }}
            />
          </div>
          <div className="hero-content">
            <h2>{firmName}</h2>
            <p>{content.heroSubtitle}</p>
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
                  {content.paragraph1}
                </p>

                <p className="content-text">
                  {content.paragraph2}
                </p>

                <p className="content-text">
                  {content.paragraph3}
                </p>

                <p className="content-text">
                  {content.paragraph4}
                </p>

                <div className="highlight-box blue-highlight">
                  <h3 className="highlight-title">{content.blueHighlightTitle}</h3>
                  <p>
                    {content.blueHighlightContent}
                  </p>
                </div>

                <p className="content-text">
                  {content.paragraph5}
                </p>

                <p className="content-text">
                  {content.paragraph6}
                </p>

                <p className="content-text">
                  {content.paragraph7}
                </p>

                <div className="highlight-box gold-highlight">
                  <h3 className="highlight-title">{content.goldHighlightTitle}</h3>
                  <p>
                    {content.goldHighlightContent}
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
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <Image
            src="/photos/bannernewwebsite.png"
            alt="About Our Law Firm"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 40%' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h2 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>About Our Firm</h2>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>{firmName}</p>
          </div>
        </section>
        {/* Main Content */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-blue-900 mb-2">{content.mainTitle}</h2>
            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>{content.paragraph1}</p>
              <p>{content.paragraph2}</p>
              <p>{content.paragraph3}</p>
              <p>{content.paragraph4}</p>
              <div className="rounded-xl bg-blue-50 p-4 shadow-sm">
                <h3 className="font-bold text-blue-900 mb-1">{content.blueHighlightTitle}</h3>
                <p>{content.blueHighlightContent}</p>
              </div>
              <p>{content.paragraph5}</p>
              <p>{content.paragraph6}</p>
              <p>{content.paragraph7}</p>
              <div className="rounded-xl bg-yellow-50 p-4 shadow-sm">
                <h3 className="font-bold text-yellow-700 mb-1">{content.goldHighlightTitle}</h3>
                <p>{content.goldHighlightContent}</p>
              </div>
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
            <a href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">⚖️</div>
              <div className="font-semibold text-gray-800 text-sm">Practice Areas</div>
            </a>
            <a href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📍</div>
              <div className="font-semibold text-gray-800 text-sm">Locations</div>
            </a>
            <a href="/contact" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📞</div>
              <div className="font-semibold text-gray-800 text-sm">Contact Us</div>
            </a>
          </div>
        </section>
        {/* Free Consultation Button at Bottom */}
        <section className="px-4 pt-4 pb-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col gap-3 p-4 items-center">
            <a href="/contact" className="w-full bg-green-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-green-700 transition flex items-center justify-center gap-2">
              <Mail size={20} />
              Free Consultation
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
} 