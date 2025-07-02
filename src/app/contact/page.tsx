"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      <Header currentPage="contact" />

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
                  <li>Dedicated team of 15+ attorneys</li>
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
    </div>
  );
} 