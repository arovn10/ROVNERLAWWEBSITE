"use client";

import Link from 'next/link';
import { SmoothImage } from '@/components/SmoothImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';
import { PRACTICE_LINKS, practiceAreaPath } from '@/lib/practice-areas';
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
  const [sidebarForm, setSidebarForm] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfIncident: '',
    represented: 'no',
    facts: '',
    agreed: false,
    website: '',
  });
  const [sidebarSubmitting, setSidebarSubmitting] = useState(false);
  const [sidebarMessage, setSidebarMessage] = useState<string | null>(null);

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
      }
    };

    fetchAboutUsData();
  }, []);

  const handleSidebarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSidebarMessage(null);
    if (!sidebarForm.agreed) {
      setSidebarMessage('Please agree to the disclaimer before sending.');
      return;
    }
    if (!sidebarForm.name.trim() || !sidebarForm.email.trim() || !sidebarForm.facts.trim()) {
      setSidebarMessage('Please fill in the required fields.');
      return;
    }
    setSidebarSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: sidebarForm.name,
          email: sidebarForm.email,
          phone: sidebarForm.phone || null,
          dateOfIncident: sidebarForm.dateOfIncident || null,
          caseType: 'general-inquiry',
          represented: sidebarForm.represented,
          facts: sidebarForm.facts,
          disclaimerAccepted: true,
          website: sidebarForm.website,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setSidebarMessage(result.message || 'Thank you. We will contact you soon.');
        setSidebarForm({
          name: '',
          email: '',
          phone: '',
          dateOfIncident: '',
          represented: 'no',
          facts: '',
          agreed: false,
          website: '',
        });
      } else {
        setSidebarMessage(result.error || 'Failed to send. Please try the Contact page or call us.');
      }
    } catch {
      setSidebarMessage('Failed to send. Please use the Contact page or call 215-259-5958.');
    } finally {
      setSidebarSubmitting(false);
    }
  };

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
        {/* Hero Section */}
        <section className="relative w-full h-64 md:h-80 overflow-hidden">
          <SmoothImage
            src="/photos/banner-sign-hero.webp"
            alt="Rovner Law Offices — Feasterville-Trevose, PA"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-2">Est. 1980</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">{content.heroTitle}</h1>
            <p className="text-slate-200 text-lg">{firmName}</p>
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

                <div className="highlight-box orange-highlight">
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
                  {PRACTICE_LINKS.map((area) => (
                    <li key={area.slug}>
                      <Link href={practiceAreaPath(area.slug)}>{area.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Form */}
              <div className="sidebar-box contact-form-box">
                <h3 className="sidebar-title">Contact Us!</h3>
                {sidebarMessage && <p className="text-sm mb-3" role="status">{sidebarMessage}</p>}
                <form className="contact-form" onSubmit={handleSidebarSubmit}>
                  <input
                    type="text"
                    name="website"
                    value={sidebarForm.website}
                    onChange={(e) => setSidebarForm((f) => ({ ...f, website: e.target.value }))}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px' }}
                  />
                  <div className="form-group">
                    <label htmlFor="about-name">Name *</label>
                    <input id="about-name" type="text" required value={sidebarForm.name} onChange={(e) => setSidebarForm((f) => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="about-email">Email *</label>
                    <input id="about-email" type="email" required value={sidebarForm.email} onChange={(e) => setSidebarForm((f) => ({ ...f, email: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="about-phone">Phone</label>
                    <input id="about-phone" type="tel" value={sidebarForm.phone} onChange={(e) => setSidebarForm((f) => ({ ...f, phone: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="about-incident">Date of Incident</label>
                    <input id="about-incident" type="date" value={sidebarForm.dateOfIncident} onChange={(e) => setSidebarForm((f) => ({ ...f, dateOfIncident: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label>Are you represented by another lawyer for this matter?</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input type="radio" name="about-represented" value="no" checked={sidebarForm.represented === 'no'} onChange={() => setSidebarForm((f) => ({ ...f, represented: 'no' }))} />
                        No
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="about-represented" value="yes" checked={sidebarForm.represented === 'yes'} onChange={() => setSidebarForm((f) => ({ ...f, represented: 'yes' }))} />
                        Yes
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="about-facts">Facts of what happened *</label>
                    <textarea id="about-facts" rows={4} required value={sidebarForm.facts} onChange={(e) => setSidebarForm((f) => ({ ...f, facts: e.target.value }))} />
                  </div>
                  <div className="form-disclaimer">
                    <label className="checkbox-label">
                      <input type="checkbox" checked={sidebarForm.agreed} onChange={(e) => setSidebarForm((f) => ({ ...f, agreed: e.target.checked }))} />
                      *I understand and agree that the submission of this form does not create an attorney-client relationship.
                    </label>
                  </div>
                  <button type="submit" className="submit-btn" disabled={sidebarSubmitting}>
                    {sidebarSubmitting ? 'SENDING…' : 'SEND MESSAGE'}
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
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-orange-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <SmoothImage
            src="/photos/banner-sign-hero.webp"
            alt="Rovner Law Offices"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h2 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>About Our Firm</h2>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>{firmName}</p>
          </div>
        </section>
        {/* Main Content */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2">{content.mainTitle}</h2>
            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>{content.paragraph1}</p>
              <p>{content.paragraph2}</p>
              <p>{content.paragraph3}</p>
              <p>{content.paragraph4}</p>
              <div className="rounded-xl bg-orange-50 p-4 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">{content.blueHighlightTitle}</h3>
                <p>{content.blueHighlightContent}</p>
              </div>
              <p>{content.paragraph5}</p>
              <p>{content.paragraph6}</p>
              <p>{content.paragraph7}</p>
              <div className="rounded-xl bg-slate-100 p-4 shadow-sm border border-slate-200/60">
                <h3 className="font-bold text-slate-800 mb-1">{content.goldHighlightTitle}</h3>
                <p>{content.goldHighlightContent}</p>
              </div>
            </div>
          </div>
        </section>
        {/* Mobile Quick Access */}
        <section className="px-4 pt-4 pb-2">
          <h3 className="text-lg font-bold mb-3 text-slate-900">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Link href="/attorneys" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">👥</div>
              <div className="font-semibold text-gray-800 text-sm">Our Attorneys</div>
            </Link>
            <Link href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">⚖️</div>
              <div className="font-semibold text-gray-800 text-sm">Practice Areas</div>
            </Link>
            <Link href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">📍</div>
              <div className="font-semibold text-gray-800 text-sm">Locations</div>
            </Link>
            <Link href="/contact" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">📞</div>
              <div className="font-semibold text-gray-800 text-sm">Contact Us</div>
            </Link>
          </div>
        </section>
        {/* Free Consultation Button at Bottom */}
        <section className="px-4 pt-4 pb-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col gap-3 p-4 items-center">
            <Link href="/contact" className="w-full bg-slate-800 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-slate-700 transition flex items-center justify-center gap-2">
              <Mail size={20} />
              Free Consultation
            </Link>
          </div>
        </section>
      </div>

      {/* Shared footer, moved outside the mobile-only wrapper above — nested
         there, it (and its fixed "Free Consultation" tab) never rendered on
         desktop at all, since a hidden ancestor collapses a child regardless
         of the child's own responsive classes. */}
      <Footer />
    </div>
  );
} 