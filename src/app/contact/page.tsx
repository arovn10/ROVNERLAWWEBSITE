import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div>
      <Header currentPage="contact" />

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
                At the Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt, we understand that dealing with legal issues can be overwhelming. That's why we offer free consultations to discuss your case and explore your legal options.
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
              <form className="contact-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" required />
                </div>
                <div className="form-group">
                  <label>Home Address</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Date of Incident</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Type of Case</label>
                  <select>
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
                  <label>Please describe what happened *</label>
                  <textarea rows={5} placeholder="Please provide details about your case..." required></textarea>
                </div>
                <div className="form-disclaimer">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    *I understand and agree that the submission of this form does not create an attorney-client relationship. There will be no representation until a formal, written contract is signed by both parties.
                  </label>
                </div>
                <button type="submit" className="submit-btn">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Quick Contact */}
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