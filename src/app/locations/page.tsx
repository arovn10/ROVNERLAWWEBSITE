"use client";

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';
import { useState } from 'react';

export default function LocationsPage() {
  const { firmName } = useFirmName();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Desktop Header/Nav */}
      <div className="hidden lg:block w-full">
        <Header currentPage="locations" />
      </div>
      {/* Mobile Header/Nav */}
      <div className="block lg:hidden w-full">
        <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>

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

      {/* Mobile Content */}
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>Our Locations</h1>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>Serving Pennsylvania and New Jersey</p>
          </div>
        </section>

        {/* Mobile Main Content */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Conveniently Located to Serve You</h2>
            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>The Law Offices of {firmName} are strategically located to serve clients throughout Pennsylvania and New Jersey. Our main office is conveniently located in Feasterville-Trevose, PA, providing easy access to clients throughout the Philadelphia metropolitan area.</p>
              <p>Whether you're located in Philadelphia, the surrounding suburbs, or across the bridge in New Jersey, our experienced legal team is ready to help you with your legal needs. We understand the local courts and legal landscape, giving us an advantage when representing our clients.</p>
            </div>

            {/* Mobile Areas We Serve */}
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Areas We Serve</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-blue-900 mb-2">Pennsylvania Counties:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {[
                      "Philadelphia County",
                      "Bucks County", 
                      "Montgomery County",
                      "Delaware County",
                      "Chester County"
                    ].map((county, index) => (
                      <span key={index} className="text-gray-700 text-sm">• {county}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-blue-900 mb-2">New Jersey Counties:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {[
                      "Camden County",
                      "Burlington County",
                      "Mercer County", 
                      "Atlantic County",
                      "Gloucester County"
                    ].map((county, index) => (
                      <span key={index} className="text-gray-700 text-sm">• {county}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Main Office */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Main Office</h3>
              <div className="flex flex-col gap-3">
                <div>
                  <h4 className="font-semibold text-blue-900 text-lg">Law Offices of {firmName}</h4>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-semibold text-gray-900 mb-1">Address:</h5>
                  <p className="text-gray-700 text-sm">175 Bustleton Pike<br />Feasterville-Trevose, PA 19053</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-semibold text-gray-900 mb-1">Contact:</h5>
                  <p className="text-gray-700 text-sm"><strong>Phone:</strong> <a href="tel:215-259-5958" className="text-blue-600">215-259-5958</a></p>
                  <p className="text-gray-700 text-sm"><strong>Email:</strong> <a href="mailto:rovners@dial-law.com" className="text-blue-600">rovners@dial-law.com</a></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-semibold text-gray-900 mb-1">Office Hours:</h5>
                  <p className="text-gray-700 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-700 text-sm">Saturday: By Appointment</p>
                  <p className="text-gray-700 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Mobile Directions */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Directions & Parking</h3>
              <div className="flex flex-col gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-900 mb-1">From Philadelphia:</h4>
                  <p className="text-gray-700 text-sm">Take I-95 North to Street Road Exit. Turn right on Street Road, then left on Bustleton Pike. Our office is on the right.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-900 mb-1">From New Jersey:</h4>
                  <p className="text-gray-700 text-sm">Take Route 1 North to Street Road Exit. Turn left on Street Road, then left on Bustleton Pike. Our office is on the right.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-900 mb-1">Parking:</h4>
                  <p className="text-gray-700 text-sm">Free parking is available in our office complex. Handicap accessible spaces are available near the entrance.</p>
                </div>
              </div>
            </div>

            {/* Mobile Communities We Serve */}
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Communities We Serve</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  {
                    title: "Philadelphia Area",
                    description: "Center City, Northeast Philadelphia, South Philadelphia, West Philadelphia, North Philadelphia, Northwest Philadelphia"
                  },
                  {
                    title: "Bucks County", 
                    description: "Doylestown, Newtown, Levittown, Langhorne, Yardley, Bristol, Warminster, Warrington, Chalfont"
                  },
                  {
                    title: "Montgomery County",
                    description: "Norristown, King of Prussia, Lansdale, Pottstown, Conshohocken, Ardmore, Abington, Horsham"
                  },
                  {
                    title: "Delaware County",
                    description: "Media, Chester, Upper Darby, Havertown, Broomall, Springfield, Ridley Park, Drexel Hill"
                  },
                  {
                    title: "Southern New Jersey",
                    description: "Camden, Cherry Hill, Voorhees, Mount Laurel, Marlton, Pennsauken, Haddonfield, Collingswood"
                  },
                  {
                    title: "Central New Jersey",
                    description: "Trenton, Princeton, Hamilton, Lawrence, Ewing, Hopewell, Pennington, West Windsor"
                  }
                ].map((area, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-blue-900 mb-1">{area.title}</h4>
                    <p className="text-gray-700 text-sm">{area.description}</p>
                  </div>
                ))}
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
            <a href="/contact" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📞</div>
              <div className="font-semibold text-gray-800 text-sm">Contact Us</div>
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

        {/* Mobile CTA */}
        <section className="px-4 pt-4 pb-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col gap-3 p-4 items-center">
            <h3 className="font-bold text-gray-900 text-lg text-center">Ready to Get Started?</h3>
            <p className="text-gray-600 text-center text-sm">Contact us today for a free consultation. We're here to help you navigate your legal challenges.</p>
            <div className="flex flex-col gap-2 w-full">
              <a href="/contact" className="w-full bg-green-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-green-700 transition">
                Schedule Free Consultation
              </a>
              <a href="tel:215-259-5958" className="w-full bg-blue-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-blue-700 transition">
                Call 215-259-5958
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
} 