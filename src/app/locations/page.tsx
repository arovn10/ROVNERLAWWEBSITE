"use client";

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFirmName } from '@/lib/FirmNameContext';

export default function LocationsPage() {
  const { firmName } = useFirmName();

  return (
    <div>
      <Header currentPage="locations" />

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>Our Locations</h2>
          <p>Serving Pennsylvania and New Jersey</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="about-content">
          <div className="about-text">
            <div className="content-title-section">
              <h2 className="content-title">Conveniently Located to Serve You</h2>
              <div className="accent-bar"></div>
            </div>

            <div className="content-text-blocks">
              <p className="content-text">
                The Law Offices of {firmName} are strategically located to serve clients throughout Pennsylvania and New Jersey. Our main office is conveniently located in Feasterville-Trevose, PA, providing easy access to clients throughout the Philadelphia metropolitan area.
              </p>

              <div className="highlight-box blue-highlight">
                <h3 className="highlight-title">Areas We Serve</h3>
                <div className="service-areas-grid">
                  <div className="service-area-column">
                    <h4>Pennsylvania Counties:</h4>
                    <ul className="highlight-list">
                      <li>Philadelphia County</li>
                      <li>Bucks County</li>
                      <li>Montgomery County</li>
                      <li>Delaware County</li>
                      <li>Chester County</li>
                    </ul>
                  </div>
                  <div className="service-area-column">
                    <h4>New Jersey Counties:</h4>
                    <ul className="highlight-list">
                      <li>Camden County</li>
                      <li>Burlington County</li>
                      <li>Mercer County</li>
                      <li>Atlantic County</li>
                      <li>Gloucester County</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="content-text">
                Whether you're located in Philadelphia, the surrounding suburbs, or across the bridge in New Jersey, our experienced legal team is ready to help you with your legal needs. We understand the local courts and legal landscape, giving us an advantage when representing our clients.
              </p>
            </div>
          </div>

          <div className="about-sidebar">
            {/* Main Office Location */}
            <div className="sidebar-box location-box">
              <h3 className="sidebar-title">Main Office</h3>
              <div className="location-details">
                <div className="location-info">
                  <h4>Law Offices of {firmName}</h4>
                  <div className="address">
                    <p>175 Bustleton Pike</p>
                    <p>Feasterville-Trevose, PA 19053</p>
                  </div>
                  <div className="contact-details">
                    <p className="phone"><strong>Phone:</strong> 215-259-5958</p>
                    <p className="email"><strong>Email:</strong> rovners@dial-law.com</p>
                  </div>
                  <div className="office-hours">
                    <h5>Office Hours:</h5>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: By Appointment</p>
                    <p>Sunday: Closed</p>
                    <p className="emergency-note"><em>24/7 Emergency Service Available</em></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="sidebar-box directions-box">
              <h3 className="sidebar-title">Directions & Parking</h3>
              <div className="directions-content">
                <div className="direction-section">
                  <h4>From Philadelphia:</h4>
                  <p>Take I-95 North to Street Road Exit. Turn right on Street Road, then left on Bustleton Pike. Our office is on the right.</p>
                </div>
                <div className="direction-section">
                  <h4>From New Jersey:</h4>
                  <p>Take Route 1 North to Street Road Exit. Turn left on Street Road, then left on Bustleton Pike. Our office is on the right.</p>
                </div>
                <div className="direction-section">
                  <h4>Parking:</h4>
                  <p>Free parking is available in our office complex. Handicap accessible spaces are available near the entrance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Details */}
      <section className="section service-areas-section">
        <div className="section-title">
          <h3>Communities We Serve</h3>
          <p>Trusted legal representation throughout the region</p>
        </div>
        
        <div className="service-areas-detailed">
          <div className="service-area-card">
            <h4>Philadelphia Area</h4>
            <p>Center City, Northeast Philadelphia, South Philadelphia, West Philadelphia, North Philadelphia, Northwest Philadelphia</p>
          </div>
          
          <div className="service-area-card">
            <h4>Bucks County</h4>
            <p>Doylestown, Newtown, Levittown, Langhorne, Yardley, Bristol, Warminster, Warrington, Chalfont</p>
          </div>
          
          <div className="service-area-card">
            <h4>Montgomery County</h4>
            <p>Norristown, King of Prussia, Lansdale, Pottstown, Conshohocken, Ardmore, Abington, Horsham</p>
          </div>
          
          <div className="service-area-card">
            <h4>Delaware County</h4>
            <p>Media, Chester, Upper Darby, Havertown, Broomall, Springfield, Ridley Park, Drexel Hill</p>
          </div>
          
          <div className="service-area-card">
            <h4>Southern New Jersey</h4>
            <p>Camden, Cherry Hill, Voorhees, Mount Laurel, Marlton, Pennsauken, Haddonfield, Collingswood</p>
          </div>
          
          <div className="service-area-card">
            <h4>Central New Jersey</h4>
            <p>Trenton, Princeton, Hamilton, Lawrence, Ewing, Hopewell, Pennington, West Windsor</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section contact-cta-section">
        <div className="contact-cta-content">
          <h3>Ready to Get Started?</h3>
          <p>Contact us today for a free consultation. We're here to help you navigate your legal challenges.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-button primary">Schedule Free Consultation</Link>
            <a href="tel:215-259-5958" className="cta-button secondary">Call 215-259-5958</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 