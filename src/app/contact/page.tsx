"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';

const HCAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

interface ContactUsData {
  id: string;
  heroTitle: string;
  heroSubtitle: string;
  mainTitle: string;
  paragraph1: string;
  paragraph2: string;
  whyChooseTitle: string;
  whyChooseList: string;
  officeAddress: string;
  officePhone: string;
  officeEmail: string;
  officeHours: string;
}

export default function ContactPage() {
  const { firmName } = useFirmName();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfIncident: '',
    caseType: '',
    represented: '',
    facts: '',
    // Honeypot — must stay empty. Bots that auto-fill every input get caught.
    website: '',
    // The disclaimer the visitor has to tick. It gated submission but had no
    // name, so it was never transmitted and never stored — the firm was
    // requiring an acknowledgement it kept no record of.
    disclaimerAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactUsData, setContactUsData] = useState<ContactUsData | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string>('');
  const desktopCaptchaRef = useRef<HCaptcha>(null);
  const mobileCaptchaRef = useRef<HCaptcha>(null);

  useEffect(() => {
    const fetchContactUsData = async () => {
      try {
        const response = await fetch('/api/contact-us');
        if (response.ok) {
          const data = await response.json();
          setContactUsData(data);
        }
      } catch (error) {
        console.error('Error fetching contact us data:', error);
      }
    };

    fetchContactUsData();
  }, []);

  // Use default content if data is not loaded yet
  const content = contactUsData || {
    heroTitle: "Contact Us",
    heroSubtitle: "Get in touch for a free consultation",
    mainTitle: "Get Your Free Consultation Today",
    paragraph1: "At the Law Offices of " + firmName + ", we understand that dealing with legal issues can be overwhelming. That's why we offer free consultations to discuss your case and explore your legal options.",
    paragraph2: "Our experienced attorneys are here to help you navigate through your legal challenges. Whether you've been injured in an accident, need help with a personal injury claim, or require legal representation for other matters, we're here to fight for your rights.",
    whyChooseTitle: "Why Choose Rovner Law?",
    whyChooseList: "Over 40 years of experience\nNo fee unless we win your case\nDedicated team of attorneys\nProven track record of success\nPersonalized attention to every case",
    officeAddress: "175 Bustleton Pike\nFeasterville-Trevose, PA 19053",
    officePhone: "215-259-5958",
    officeEmail: "rovners@dial-law.com",
    officeHours: "Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: By Appointment\nSunday: Closed"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    // Checkboxes carry their state in `checked`, not `value` — reading `value`
    // would store the string "on" regardless of whether the box is ticked.
    const nextValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({
      ...prev,
      [name]: nextValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (HCAPTCHA_SITE_KEY && !captchaToken) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete the captcha before submitting.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const result = await response.json();

      if (response.ok) {
        // A dedicated URL instead of an inline banner on the same page: it
        // gives a Google Ads conversion tag something reliable to fire on
        // (a page load) rather than a same-page state change, and it means a
        // bookmarked/shared link to this exact confirmation doesn't silently
        // imply "the form was submitted" the way the old banner state could.
        router.push('/contact/thank-you');
        return;
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Desktop Header/Nav */}
      <div className="hidden lg:block w-full">
        <Header currentPage="contact" />
      </div>
      {/* Mobile Header/Nav */}
      <div className="block lg:hidden w-full">
        <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>

      {/* Success/Error Message */}
      {submitStatus.type && (
        <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-lg shadow-lg ${
          submitStatus.type === 'success' 
            ? 'bg-slate-800 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {submitStatus.message}
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>{content.heroTitle}</h2>
          <p>{content.heroSubtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="about-content">
          <div className="about-text">
            <div className="content-title-section">
              <h2 className="content-title">{content.mainTitle}</h2>
              <div className="accent-bar"></div>
            </div>

            <div className="content-text-blocks">
              <p className="content-text">
                {content.paragraph1}
              </p>

              <p className="content-text">
                {content.paragraph2}
              </p>

              <div className="highlight-box orange-highlight">
                <h3 className="highlight-title">{content.whyChooseTitle}</h3>
                <ul className="highlight-list">
                  {content.whyChooseList.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <h4>Office Address</h4>
                  <p>
                    {content.officeAddress.split('\n').map((line, index) => (
                      <span key={index}>{line}{index < content.officeAddress.split('\n').length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
                <div className="contact-info-item">
                  <h4>Phone Number</h4>
                  <p className="phone-large">{content.officePhone}</p>
                </div>
                <div className="contact-info-item">
                  <h4>Email</h4>
                  <p>{content.officeEmail}</p>
                </div>
                <div className="contact-info-item">
                  <h4>Office Hours</h4>
                  <p>
                    {content.officeHours.split('\n').map((line, index) => (
                      <span key={index}>{line}{index < content.officeHours.split('\n').length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            {/* Contact Form */}
            <div className="sidebar-box contact-form-box">
              <h3 className="sidebar-title">Contact Form</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Honeypot: must stay empty. Hidden from real users. */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '-10000px',
                    top: 'auto',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden',
                  }}
                >
                  <label>
                    Website (do not fill)
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-name-d">Full Name *</label>
                  <input id="contact-name-d"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email-d">Email Address *</label>
                  <input id="contact-email-d" 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone-d">Phone Number *</label>
                  <input id="contact-phone-d" 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-dateOfIncident-d">Date of Incident</label>
                  <input id="contact-dateOfIncident-d" 
                    type="date" 
                    name="dateOfIncident"
                    value={formData.dateOfIncident}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-caseType-d">Type of Case</label>
                  <select id="contact-caseType-d" 
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Case Type</option>
                    <option value="auto-accident">Auto Accident</option>
                    <option value="personal-injury">Personal Injury</option>
                    <option value="medical-malpractice">Medical Malpractice</option>
                    <option value="premises-liability">Premises Liability</option>
                    <option value="workers-comp">Workers' Compensation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-represented-d">Are you currently represented by another lawyer for this matter?</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input id="contact-represented-d" 
                        type="radio" 
                        name="represented" 
                        value="no"
                        checked={formData.represented === 'no'}
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="represented" 
                        value="yes"
                        checked={formData.represented === 'yes'}
                        onChange={handleInputChange}
                      />
                      Yes
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-facts-d">Please describe what happened *</label>
                  <textarea id="contact-facts-d" 
                    rows={5} 
                    name="facts"
                    value={formData.facts}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your case..." 
                    required
                  ></textarea>
                </div>
                {HCAPTCHA_SITE_KEY && (
                  <div className="form-group">
                    <HCaptcha
                      ref={desktopCaptchaRef}
                      sitekey={HCAPTCHA_SITE_KEY}
                      onVerify={(token) => setCaptchaToken(token)}
                      onExpire={() => setCaptchaToken('')}
                    />
                  </div>
                )}
                <div className="form-disclaimer">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="disclaimerAccepted"
                      checked={formData.disclaimerAccepted}
                      onChange={handleInputChange}
                      required
                    />
                    *I understand and agree that the submission of this form does not create an attorney-client relationship. There will be no representation until a formal, written contract is signed by both parties.
                  </label>
                </div>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            </div>

            {/* Quick Contact */}
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

      {/* Mobile Content */}
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-orange-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-800 to-orange-600" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>Contact Us</h1>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>Get in touch for a free consultation</p>
          </div>
        </section>

        {/* Mobile Success/Error Message */}
        {submitStatus.type && (
          <div className={`mx-4 mb-4 p-4 rounded-lg shadow-lg ${
            submitStatus.type === 'success' 
              ? 'bg-slate-800 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Mobile Main Content */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Get Your Free Consultation Today</h2>
            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>At the Law Offices of {firmName}, we understand that dealing with legal issues can be overwhelming. That's why we offer free consultations to discuss your case and explore your legal options.</p>
              <p>Our experienced attorneys are here to help you navigate through your legal challenges. Whether you've been injured in an accident, need help with a personal injury claim, or require legal representation for other matters, we're here to fight for your rights.</p>
            </div>

            {/* Mobile Why Choose Us */}
            <div className="bg-orange-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">{content.whyChooseTitle}</h3>
              <div className="grid grid-cols-1 gap-2">
                {content.whyChooseList.split('\n').map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <span className="text-gray-800 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Contact Information</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Office Address</h4>
                  <p className="text-gray-700 text-sm">
                    {content.officeAddress.split('\n').map((line, index) => (
                      <span key={index}>{line}{index < content.officeAddress.split('\n').length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Phone Number</h4>
                  <a href={`tel:${content.officePhone}`} className="text-orange-600 font-bold text-lg">{content.officePhone}</a>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Email</h4>
                  <a href={`mailto:${content.officeEmail}`} className="text-orange-600 text-sm">{content.officeEmail}</a>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Office Hours</h4>
                  <p className="text-gray-700 text-sm">
                    {content.officeHours.split('\n').map((line, index) => (
                      <span key={index}>{line}{index < content.officeHours.split('\n').length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Contact Form */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Contact Form</h3>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {/* Honeypot: must stay empty. Hidden from real users. */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '-10000px',
                    top: 'auto',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden',
                  }}
                >
                  <label>
                    Website (do not fill)
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="contact-name-m" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input id="contact-name-m"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email-m" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input id="contact-email-m" 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone-m" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input id="contact-phone-m" 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-dateOfIncident-m" className="block text-sm font-medium text-gray-700 mb-1">Date of Incident</label>
                  <input id="contact-dateOfIncident-m" 
                    type="date" 
                    name="dateOfIncident"
                    value={formData.dateOfIncident}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-caseType-m" className="block text-sm font-medium text-gray-700 mb-1">Type of Case</label>
                  <select id="contact-caseType-m" 
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select Case Type</option>
                    <option value="auto-accident">Auto Accident</option>
                    <option value="personal-injury">Personal Injury</option>
                    <option value="medical-malpractice">Medical Malpractice</option>
                    <option value="premises-liability">Premises Liability</option>
                    <option value="workers-comp">Workers' Compensation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-represented-m" className="block text-sm font-medium text-gray-700 mb-2">Are you currently represented by another lawyer for this matter?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input id="contact-represented-m" 
                        type="radio" 
                        name="represented" 
                        value="no"
                        checked={formData.represented === 'no'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm">No</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="represented" 
                        value="yes"
                        checked={formData.represented === 'yes'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Yes</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-facts-m" className="block text-sm font-medium text-gray-700 mb-1">Please describe what happened *</label>
                  <textarea id="contact-facts-m" 
                    rows={4} 
                    name="facts"
                    value={formData.facts}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your case..." 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                </div>
                {HCAPTCHA_SITE_KEY && (
                  <div>
                    <HCaptcha
                      ref={mobileCaptchaRef}
                      sitekey={HCAPTCHA_SITE_KEY}
                      onVerify={(token) => setCaptchaToken(token)}
                      onExpire={() => setCaptchaToken('')}
                    />
                  </div>
                )}
                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="disclaimerAccepted"
                      checked={formData.disclaimerAccepted}
                      onChange={handleInputChange}
                      required
                      className="mr-2 mt-1"
                    />
                    <span className="text-xs text-gray-600">
                      *I understand and agree that the submission of this form does not create an attorney-client relationship. There will be no representation until a formal, written contract is signed by both parties.
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
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
            <Link href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">📍</div>
              <div className="font-semibold text-gray-800 text-sm">Locations</div>
            </Link>
            <Link href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">⚖️</div>
              <div className="font-semibold text-gray-800 text-sm">Practice Areas</div>
            </Link>
            <Link href="/about" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">ℹ️</div>
              <div className="font-semibold text-gray-800 text-sm">About Us</div>
            </Link>
          </div>
        </section>

        {/* Mobile Quick Contact */}
        <section className="px-4 pt-4 pb-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col gap-3 p-4 items-center">
            <h3 className="font-bold text-gray-900 text-lg">Need Immediate Assistance?</h3>
            <p className="text-gray-600 text-center text-sm">Call us now for immediate help!</p>
            <a href={`tel:${content.officePhone}`} className="w-full bg-slate-800 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-slate-700 transition">
              Call {content.officePhone}
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
} 