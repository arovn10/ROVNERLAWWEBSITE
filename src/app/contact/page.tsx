"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';

export default function ContactPage() {
  const { firmName } = useFirmName();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfIncident: '',
    caseType: '',
    represented: '',
    facts: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you for your message. We will contact you soon!'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          dateOfIncident: '',
          caseType: '',
          represented: '',
          facts: ''
        });
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (_) {
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
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {submitStatus.message}
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>Contact Us</h2>
          <p>Get in touch for a free consultation</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="about-content">
          <div className="about-text">
            <div className="content-title-section">
              <h2 className="content-title">Get Your Free Consultation Today</h2>
              <div className="accent-bar"></div>
            </div>

            <div className="content-text-blocks">
              <p className="content-text">
                At the Law Offices of {firmName}, we understand that dealing with legal issues can be overwhelming. That's why we offer free consultations to discuss your case and explore your legal options.
              </p>

              <p className="content-text">
                Our experienced attorneys are here to help you navigate through your legal challenges. Whether you've been injured in an accident, need help with a personal injury claim, or require legal representation for other matters, we're here to fight for your rights.
              </p>

              <div className="highlight-box blue-highlight">
                <h3 className="highlight-title">Why Choose Rovner Law?</h3>
                <ul className="highlight-list">
                  <li>Over 40 years of experience</li>
                  <li>No fee unless we win your case</li>
                  <li>Dedicated team of attorneys</li>
                  <li>Proven track record of success</li>
                  <li>Personalized attention to every case</li>
                </ul>
              </div>

              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <h4>Office Address</h4>
                  <p>175 Bustleton Pike<br />Feasterville-Trevose, PA 19053</p>
                </div>
                <div className="contact-info-item">
                  <h4>Phone Number</h4>
                  <p className="phone-large">215-259-5958</p>
                </div>
                <div className="contact-info-item">
                  <h4>Email</h4>
                  <p>rovners@dial-law.com</p>
                </div>
                <div className="contact-info-item">
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: By Appointment<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            {/* Contact Form */}
            <div className="sidebar-box contact-form-box">
              <h3 className="sidebar-title">Contact Form</h3>
              {submitStatus.type === 'success' && (
                <div style={{
                  background: '#e6f9ed',
                  color: '#217a3c',
                  border: '2px solid #34d399',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: '0 2px 12px rgba(52,211,153,0.08)'
                }}>
                  <span style={{fontSize:'2rem',lineHeight:1}}>✅</span>
                  {submitStatus.message || 'Your message has been sent! We will contact you soon.'}
                </div>
              )}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Date of Incident</label>
                  <input 
                    type="date" 
                    name="dateOfIncident"
                    value={formData.dateOfIncident}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Type of Case</label>
                  <select 
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
                  <label>Are you currently represented by another lawyer for this matter?</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input 
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
                  <label>Please describe what happened *</label>
                  <textarea 
                    rows={5} 
                    name="facts"
                    value={formData.facts}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your case..." 
                    required
                  ></textarea>
                </div>
                <div className="form-disclaimer">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
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
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>Contact Us</h1>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>Get in touch for a free consultation</p>
          </div>
        </section>

        {/* Mobile Success/Error Message */}
        {submitStatus.type && (
          <div className={`mx-4 mb-4 p-4 rounded-lg shadow-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Mobile Main Content */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Get Your Free Consultation Today</h2>
            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>At the Law Offices of {firmName}, we understand that dealing with legal issues can be overwhelming. That's why we offer free consultations to discuss your case and explore your legal options.</p>
              <p>Our experienced attorneys are here to help you navigate through your legal challenges. Whether you've been injured in an accident, need help with a personal injury claim, or require legal representation for other matters, we're here to fight for your rights.</p>
            </div>

            {/* Mobile Why Choose Us */}
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Why Choose Rovner Law?</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Over 40 years of experience",
                  "No fee unless we win your case",
                  "Dedicated team of attorneys",
                  "Proven track record of success",
                  "Personalized attention to every case"
                ].map((item, index) => (
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
                  <p className="text-gray-700 text-sm">175 Bustleton Pike<br />Feasterville-Trevose, PA 19053</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Phone Number</h4>
                  <a href="tel:215-259-5958" className="text-blue-600 font-bold text-lg">215-259-5958</a>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Email</h4>
                  <a href="mailto:rovners@dial-law.com" className="text-blue-600 text-sm">rovners@dial-law.com</a>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Office Hours</h4>
                  <p className="text-gray-700 text-sm">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: By Appointment<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Mobile Contact Form */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Contact Form</h3>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Incident</label>
                  <input 
                    type="date" 
                    name="dateOfIncident"
                    value={formData.dateOfIncident}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type of Case</label>
                  <select 
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Are you currently represented by another lawyer for this matter?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input 
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Please describe what happened *</label>
                  <textarea 
                    rows={4} 
                    name="facts"
                    value={formData.facts}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your case..." 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <div>
                  <label className="flex items-start">
                    <input type="checkbox" required className="mr-2 mt-1" />
                    <span className="text-xs text-gray-600">
                      *I understand and agree that the submission of this form does not create an attorney-client relationship. There will be no representation until a formal, written contract is signed by both parties.
                    </span>
                  </label>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
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
            <a href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📍</div>
              <div className="font-semibold text-gray-800 text-sm">Locations</div>
            </a>
            <a href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">⚖️</div>
              <div className="font-semibold text-gray-800 text-sm">Practice Areas</div>
            </a>
            <a href="/about" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">ℹ️</div>
              <div className="font-semibold text-gray-800 text-sm">About Us</div>
            </a>
          </div>
        </section>

        {/* Mobile Quick Contact */}
        <section className="px-4 pt-4 pb-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col gap-3 p-4 items-center">
            <h3 className="font-bold text-gray-900 text-lg">Need Immediate Assistance?</h3>
            <p className="text-gray-600 text-center text-sm">Call us now for immediate help!</p>
            <a href="tel:215-259-5958" className="w-full bg-blue-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-blue-700 transition">
              Call 215-259-5958
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
} 