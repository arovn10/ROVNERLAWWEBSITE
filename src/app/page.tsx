import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-titles">
            <h1>LAW OFFICES OF</h1>
            <h2>Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h2>
          </div>
          <div className="header-contact">
            <div className="phone-number">215-259-5958</div>
            <button className="cta-button">GET A FREE CONSULTATION!</button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <ul className="nav-list">
          <li><Link href="/" className="nav-link active">HOME</Link></li>
          <li><Link href="/about" className="nav-link">ABOUT US</Link></li>
          <li><Link href="/attorneys" className="nav-link">ATTORNEYS</Link></li>
          <li><Link href="/practice" className="nav-link">PRACTICE</Link></li>
          <li><Link href="/locations" className="nav-link">LOCATIONS</Link></li>
          <li><Link href="/photo-gallery" className="nav-link">PHOTO GALLERY</Link></li>
          <li><Link href="/in-the-news" className="nav-link">IN THE NEWS</Link></li>
          <li><Link href="/radio-show" className="nav-link">RADIO SHOW</Link></li>
          <li><Link href="/contact" className="nav-link">CONTACT US</Link></li>
        </ul>
      </nav>

      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <h2>RECENT SETTLEMENTS & VERDICTS</h2>
          <p>Over 40 Years of Fighting for Our Clients</p>
        </div>
      </section>

      {/* Recent Settlements Grid */}
      <section className="section">
        <div className="section-title">
          <h3>Recent Results</h3>
          <p>We get results for our clients</p>
        </div>
        <div className="grid grid-5">
          <div className="card settlement-card">
            <div className="settlement-amount">$113,500</div>
            <div className="settlement-type">Limited Tort Motor Vehicle Accident</div>
          </div>
          <div className="card settlement-card">
            <div className="settlement-amount">$50,000</div>
            <div className="settlement-type">SEPTA Bus Accident</div>
          </div>
          <div className="card settlement-card">
            <div className="settlement-amount">$185,000</div>
            <div className="settlement-type">Trip and Fall Accident</div>
          </div>
          <div className="card settlement-card">
            <div className="settlement-amount">$140,000</div>
            <div className="settlement-type">Verbal Threshold Motor Vehicle Accident</div>
          </div>
          <div className="card settlement-card">
            <div className="settlement-amount">$120,000</div>
            <div className="settlement-type">Fall on Slippery Floor</div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="section">
        <div className="section-title">
          <h3>Our Practice Areas</h3>
          <p>Comprehensive legal services with proven results</p>
        </div>
        <div className="grid grid-4">
          {/* Auto Accidents */}
          <div className="card practice-card">
            <div className="practice-icon icon-blue">🚗</div>
            <h3 className="practice-title">AUTO ACCIDENTS</h3>
            <p className="practice-description">
              No Fee if No Recovery! If you have been injured in a motor vehicle accident, we can help you understand your legal options and develop a strategy for maximizing compensation.
            </p>
            <Link href="/practice" className="learn-more-btn">LEARN MORE</Link>
          </div>

          {/* Personal Injury */}
          <div className="card practice-card">
            <div className="practice-icon icon-red">⚖️</div>
            <h3 className="practice-title">PERSONAL INJURY</h3>
            <p className="practice-description">
              Our team of over 15 lawyers plus our paralegals, investigators, experts, all with hundreds of years of combined experience, put us at the top of the legal profession.
            </p>
            <Link href="/practice" className="learn-more-btn">LEARN MORE</Link>
          </div>

          {/* Medical Malpractice */}
          <div className="card practice-card">
            <div className="practice-icon icon-green">🏥</div>
            <h3 className="practice-title">MEDICAL MALPRACTICE</h3>
            <p className="practice-description">
              Even well-meaning doctors make mistakes that can have a devastating effect on a patient's health. If you or someone you love has been a victim of medical malpractice contact us today.
            </p>
            <Link href="/practice" className="learn-more-btn">LEARN MORE</Link>
          </div>

          {/* Premises Liability */}
          <div className="card practice-card">
            <div className="practice-icon icon-purple">🏢</div>
            <h3 className="practice-title">PREMISES LIABILITY</h3>
            <p className="practice-description">
              Property owners, landlords and property managers have an obligation to keep their premises safe. If they fail to do so, they may be liable for the damages, losses and injuries they've caused.
            </p>
            <Link href="/practice" className="learn-more-btn">LEARN MORE</Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section">
        <div className="main-layout">
          {/* Main Content */}
          <div className="content-main">
            <h2 className="content-title">Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h2>
            <div className="accent-bar"></div>
            <h3 className="content-subtitle">Premier Injury Lawyers</h3>

            <p className="content-text">
              For over 40 years, the Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt have been fighting for clients in Philly who have been victims of negligence, auto accidents, personal injury, medical malpractice and premise liability and need an injury lawyer to properly represent them.
            </p>

            <div className="info-box info-blue">
              <h4>Auto Accidents</h4>
              <p>
                When in need of a Philadelphia auto accident lawyer, our injury lawyer team is ready to offer their services in the Philly area. We provide a free initial consultation and do not charge a fee if there is no recovery.
              </p>
            </div>

            <div className="info-box info-red">
              <h4>Personal Injury</h4>
              <p>
                Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt has a team of lawyers with proven success in representing injured parties. We will pursue financial compensation for you.
              </p>
            </div>

            <div className="info-box info-green">
              <h4>Medical Malpractice</h4>
              <p>
                Most medical workers are responsible professionals who are committed to their patients. However, even well-meaning doctors make mistakes that can have a devastating effect on a patient's health.
              </p>
            </div>

            <div className="info-box info-purple">
              <h4>Premises Liability</h4>
              <p>
                Property owners, landlords and property managers have an obligation to keep their premises safe. If they fail to do so, they may be liable for the damages, losses and injuries they have caused you.
              </p>
            </div>

            <p className="content-text">
              Other areas of law that we focus on are defective products, workers' compensation, divorce, family law, criminal defense, social security disability, real estate and general legal matters.
            </p>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Practice Areas Box */}
            <div className="sidebar-card practice-areas-box">
              <h3 className="practice-areas-title">PRACTICE AREAS</h3>
              <ul className="practice-list">
                <li className="practice-item">Personal Injury</li>
                <li className="practice-item">Auto Accidents</li>
                <li className="practice-item">Motorcycle Accidents</li>
                <li className="practice-item">Truck Accidents</li>
                <li className="practice-item">Premises Liability</li>
                <li className="practice-item">Medical Malpractice</li>
                <li className="practice-item">Defective Products</li>
                <li className="practice-item">Workers' Compensation</li>
                <li className="practice-item">Divorce/ Family Law/ Custody</li>
                <li className="practice-item">Criminal Defense</li>
                <li className="practice-item">Social Security Disability</li>
                <li className="practice-item">General Legal Matters</li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="sidebar-card">
              <h3 className="form-title">Contact Us!</h3>
              <form className="form">
                <input type="text" placeholder="Name *" className="form-input" />
                <input type="email" placeholder="Email *" className="form-input" />
                <input type="tel" placeholder="Phone *" className="form-input" />
                <input type="text" placeholder="Home Address" className="form-input" />
                <input type="date" placeholder="Date of Incident *" className="form-input" />
                <textarea rows={4} placeholder="Facts of what happened *" className="form-input form-textarea"></textarea>
                <button type="submit" className="form-button">SEND MESSAGE</button>
              </form>
            </div>

            {/* Newsletter Signup */}
            <div className="sidebar-card">
              <h3 className="form-title">Subscribe to Our Mailing List</h3>
              <form className="form">
                <input type="email" placeholder="Email Address *" className="form-input" />
                <input type="text" placeholder="First Name" className="form-input" />
                <input type="text" placeholder="Last Name" className="form-input" />
                <button type="submit" className="form-button newsletter-button">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Contact Button */}
      <Link href="/contact" className="fixed-contact">
        CONTACT US!
      </Link>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            {/* Navigation */}
            <div className="footer-section">
              <h4>Navigation</h4>
              <ul className="footer-list">
                <li><Link href="/" className="footer-link">Home</Link></li>
                <li><Link href="/about" className="footer-link">About</Link></li>
                <li><Link href="/attorneys" className="footer-link">Attorneys</Link></li>
                <li><Link href="/locations" className="footer-link">Locations</Link></li>
                <li><Link href="/photo-gallery" className="footer-link">Photo Gallery</Link></li>
                <li><Link href="/in-the-news" className="footer-link">In the News</Link></li>
                <li><Link href="/radio-show" className="footer-link">Radio Show</Link></li>
                <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
              </ul>
            </div>

            {/* Practice Areas */}
            <div className="footer-section">
              <h4>Practice Areas</h4>
              <ul className="footer-list">
                <li><Link href="/practice" className="footer-link">Personal Injury</Link></li>
                <li><Link href="/practice" className="footer-link">Automobile Accidents</Link></li>
                <li><Link href="/practice" className="footer-link">Motorcycle Accidents</Link></li>
                <li><Link href="/practice" className="footer-link">Truck Accidents</Link></li>
                <li><Link href="/practice" className="footer-link">Premises Liability</Link></li>
                <li><Link href="/practice" className="footer-link">Medical Malpractice</Link></li>
                <li><Link href="/practice" className="footer-link">Defective Products</Link></li>
                <li><Link href="/practice" className="footer-link">Workers' Compensation</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Us</h4>
              <div className="footer-contact-info">
                <p>175 Bustleton Pike<br />Feasterville-Trevose, PA 19053</p>
                <p className="footer-phone">215-259-5958</p>
                <p>rovners@dial-law.com</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-disclaimer">
              The hiring of a lawyer is an important decision that should not be based solely upon advertisements. 
              <Link href="#"> Click here to see our disclaimer policies.</Link>
            </p>
            <p className="footer-copyright">©1997-2024 by Robert A. Rovner, P.C. All rights reserved. Created, Maintained and Programmed by Steven L. Rovner</p>
            <p className="footer-legal">
              The submission of the information contained above in this form is not intended to create an attorney-client relationship. There will be no representation of the party submitting this above information for any potential legal claim until that party is contacted by a member of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt ("the Firm") and a formal, written contract is signed by that party and an authorized member of the Firm. The Firm will not be liable for any time limitations or representation in any legal matter raised by the use of this internet website.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
