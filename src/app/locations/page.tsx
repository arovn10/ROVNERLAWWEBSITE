"use client";

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LocationsData {
  id: string;
  heroTitle: string;
  heroSubtitle: string;
  mainTitle: string;
  paragraph1: string;
  paragraph2: string;
  areasWeServeTitle: string;
  paCountiesTitle: string;
  paCounties: string;
  njCountiesTitle: string;
  njCounties: string;
  paragraph3: string;
  mainOfficeTitle: string;
  officeName: string;
  officeAddress: string;
  officePhone: string;
  officeEmail: string;
  officeHours: string;
  directionsTitle: string;
  directionsFromPhilly: string;
  directionsFromNJ: string;
  parkingInfo: string;
  communitiesTitle: string;
  communitiesSubtitle: string;
  philadelphiaArea: string;
  bucksCounty: string;
  montgomeryCounty: string;
  delawareCounty: string;
  southernNJ: string;
  centralNJ: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaPhoneText: string;
}

export default function LocationsPage() {
  const { firmName } = useFirmName();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsData, setLocationsData] = useState<LocationsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLocationsData = async () => {
      try {
        const response = await fetch('/api/locations');
        if (response.ok) {
          const data = await response.json();
          setLocationsData(data);
        }
      } catch (error) {
        console.error('Error fetching locations data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocationsData();
  }, []);

  // Use default content if data is not loaded yet
  const content = locationsData || {
    heroTitle: "Our Locations",
    heroSubtitle: "Serving Pennsylvania and New Jersey",
    mainTitle: "Conveniently Located to Serve You",
    paragraph1: "The Law Offices of " + firmName + " are strategically located to serve clients throughout Pennsylvania and New Jersey. Our main office is conveniently located in Feasterville-Trevose, PA, providing easy access to clients throughout the Philadelphia metropolitan area.",
    paragraph2: "Whether you're located in Philadelphia, the surrounding suburbs, or across the bridge in New Jersey, our experienced legal team is ready to help you with your legal needs. We understand the local courts and legal landscape, giving us an advantage when representing our clients.",
    areasWeServeTitle: "Areas We Serve",
    paCountiesTitle: "Pennsylvania Counties:",
    paCounties: "Philadelphia County\nBucks County\nMontgomery County\nDelaware County\nChester County",
    njCountiesTitle: "New Jersey Counties:",
    njCounties: "Camden County\nBurlington County\nMercer County\nAtlantic County\nGloucester County",
    paragraph3: "Whether you're located in Philadelphia, the surrounding suburbs, or across the bridge in New Jersey, our experienced legal team is ready to help you with your legal needs. We understand the local courts and legal landscape, giving us an advantage when representing our clients.",
    mainOfficeTitle: "Main Office",
    officeName: "Law Offices of " + firmName,
    officeAddress: "175 Bustleton Pike\nFeasterville-Trevose, PA 19053",
    officePhone: "215-259-5958",
    officeEmail: "rovners@dial-law.com",
    officeHours: "Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: By Appointment\nSunday: Closed",
    directionsTitle: "Directions & Parking",
    directionsFromPhilly: "Take I-95 North to Street Road Exit. Turn right on Street Road, then left on Bustleton Pike. Our office is on the right.",
    directionsFromNJ: "Take Route 1 North to Street Road Exit. Turn left on Street Road, then left on Bustleton Pike. Our office is on the right.",
    parkingInfo: "Free parking is available in our office complex. Handicap accessible spaces are available near the entrance.",
    communitiesTitle: "Communities We Serve",
    communitiesSubtitle: "Trusted legal representation throughout the region",
    philadelphiaArea: "Center City, Northeast Philadelphia, South Philadelphia, West Philadelphia, North Philadelphia, Northwest Philadelphia",
    bucksCounty: "Doylestown, Newtown, Levittown, Langhorne, Yardley, Bristol, Warminster, Warrington, Chalfont",
    montgomeryCounty: "Norristown, King of Prussia, Lansdale, Pottstown, Conshohocken, Ardmore, Abington, Horsham",
    delawareCounty: "Media, Chester, Upper Darby, Havertown, Broomall, Springfield, Ridley Park, Drexel Hill",
    southernNJ: "Camden, Cherry Hill, Voorhees, Mount Laurel, Marlton, Pennsauken, Haddonfield, Collingswood",
    centralNJ: "Trenton, Princeton, Hamilton, Lawrence, Ewing, Hopewell, Pennington, West Windsor",
    ctaTitle: "Ready to Get Started?",
    ctaDescription: "Contact us today for a free consultation. We're here to help you navigate your legal challenges.",
    ctaButtonText: "Schedule Free Consultation",
    ctaPhoneText: "Call 215-259-5958"
  };

  return (
    <div>
      {/* Desktop Header/Nav */}
      <div className="hidden lg:block w-full">
        <Header currentPage="locations" />
      </div>
      {/* Desktop Hero Banner */}
      <div className="hidden lg:block w-full">
        <section className="relative w-full flex items-center justify-center overflow-hidden border-b border-slate-100" style={{ minHeight: '240px', background: 'black' }}>
          <Image
            src="/photos/bannernewwebsite.png"
            alt="Rovner Law Banner"
            fill
            style={{ objectFit: 'cover', width: '100%', height: '240px' }}
            priority
          />
        </section>
      </div>
      {/* Mobile Header/Nav */}
      <div className="block lg:hidden w-full">
        <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>

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

                <div className="highlight-box blue-highlight">
                  <h3 className="highlight-title">{content.areasWeServeTitle}</h3>
                  <div className="service-areas-grid">
                    <div className="service-area-column">
                      <h4>{content.paCountiesTitle}</h4>
                      <ul className="highlight-list">
                        {content.paCounties.split('\n').map((county, index) => (
                          <li key={index}>{county}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="service-area-column">
                      <h4>{content.njCountiesTitle}</h4>
                      <ul className="highlight-list">
                        {content.njCounties.split('\n').map((county, index) => (
                          <li key={index}>{county}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="content-text">
                  {content.paragraph2}
                </p>
              </div>
          </div>

          <div className="about-sidebar">
            {/* Main Office Location */}
            <div className="sidebar-box location-box">
              <h3 className="sidebar-title">{content.mainOfficeTitle}</h3>
              <div className="location-details">
                <div className="location-info">
                  <h4>{content.officeName}</h4>
                  <div className="address">
                    {content.officeAddress.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                  <div className="contact-details">
                    <p className="phone"><strong>Phone:</strong> {content.officePhone}</p>
                    <p className="email"><strong>Email:</strong> {content.officeEmail}</p>
                  </div>
                  <div className="office-hours">
                    <h5>Office Hours:</h5>
                    {content.officeHours.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="sidebar-box directions-box">
              <h3 className="sidebar-title">{content.directionsTitle}</h3>
              <div className="directions-content">
                <div className="direction-section">
                  <h4>From Philadelphia:</h4>
                  <p>{content.directionsFromPhilly}</p>
                </div>
                <div className="direction-section">
                  <h4>From New Jersey:</h4>
                  <p>{content.directionsFromNJ}</p>
                </div>
                <div className="direction-section">
                  <h4>Parking:</h4>
                  <p>{content.parkingInfo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Details */}
      <section className="section service-areas-section">
        <div className="section-title">
          <h3>{content.communitiesTitle}</h3>
          <p>{content.communitiesSubtitle}</p>
        </div>
        
        <div className="service-areas-detailed">
          <div className="service-area-card">
            <h4>Philadelphia Area</h4>
            <p>{content.philadelphiaArea}</p>
          </div>
          
          <div className="service-area-card">
            <h4>Bucks County</h4>
            <p>{content.bucksCounty}</p>
          </div>
          
          <div className="service-area-card">
            <h4>Montgomery County</h4>
            <p>{content.montgomeryCounty}</p>
          </div>
          
          <div className="service-area-card">
            <h4>Delaware County</h4>
            <p>{content.delawareCounty}</p>
          </div>
          
          <div className="service-area-card">
            <h4>Southern New Jersey</h4>
            <p>{content.southernNJ}</p>
          </div>
          
          <div className="service-area-card">
            <h4>Central New Jersey</h4>
            <p>{content.centralNJ}</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section contact-cta-section">
        <div className="contact-cta-content">
          <h3>{content.ctaTitle}</h3>
          <p>{content.ctaDescription}</p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-button primary">{content.ctaButtonText}</Link>
            <a href="tel:215-259-5958" className="cta-button secondary">{content.ctaPhoneText}</a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Content */}
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full flex items-center justify-center rounded-b-3xl shadow-md mb-4 overflow-hidden" style={{ minHeight: '160px', height: '160px' }}>
          <Image
            src="/photos/bannernewwebsite.png"
            alt="Rovner Law Banner"
            fill
            style={{ objectFit: 'cover', width: '100%', height: '160px' }}
            priority
          />
        </section>

        {/* Mobile Main Content */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-blue-900 mb-2">{content.mainTitle}</h2>
            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>{content.paragraph1}</p>
              <p>{content.paragraph2}</p>
            </div>

            {/* Mobile Areas We Serve */}
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">{content.areasWeServeTitle}</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-blue-900 mb-2">{content.paCountiesTitle}</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {content.paCounties.split('\n').map((county, index) => (
                      <span key={index} className="text-gray-700 text-sm">• {county}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-blue-900 mb-2">{content.njCountiesTitle}</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {content.njCounties.split('\n').map((county, index) => (
                      <span key={index} className="text-gray-700 text-sm">• {county}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Main Office */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">{content.mainOfficeTitle}</h3>
              <div className="flex flex-col gap-3">
                <div>
                  <h4 className="font-semibold text-blue-900 text-lg">{content.officeName}</h4>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-semibold text-gray-900 mb-1">Address:</h5>
                  <p className="text-gray-700 text-sm">
                    {content.officeAddress.split('\n').map((line, index) => (
                      <span key={index}>{line}{index < content.officeAddress.split('\n').length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-semibold text-gray-900 mb-1">Contact:</h5>
                  <p className="text-gray-700 text-sm"><strong>Phone:</strong> <a href={`tel:${content.officePhone}`} className="text-blue-600">{content.officePhone}</a></p>
                  <p className="text-gray-700 text-sm"><strong>Email:</strong> <a href={`mailto:${content.officeEmail}`} className="text-blue-600">{content.officeEmail}</a></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h5 className="font-semibold text-gray-900 mb-1">Office Hours:</h5>
                  {content.officeHours.split('\n').map((line, index) => (
                    <p key={index} className="text-gray-700 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Directions */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">{content.directionsTitle}</h3>
              <div className="flex flex-col gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-900 mb-1">From Philadelphia:</h4>
                  <p className="text-gray-700 text-sm">{content.directionsFromPhilly}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-900 mb-1">From New Jersey:</h4>
                  <p className="text-gray-700 text-sm">{content.directionsFromNJ}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-900 mb-1">Parking:</h4>
                  <p className="text-gray-700 text-sm">{content.parkingInfo}</p>
                </div>
              </div>
            </div>

            {/* Mobile Communities We Serve */}
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">{content.communitiesTitle}</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  {
                    title: "Philadelphia Area",
                    description: content.philadelphiaArea
                  },
                  {
                    title: "Bucks County", 
                    description: content.bucksCounty
                  },
                  {
                    title: "Montgomery County",
                    description: content.montgomeryCounty
                  },
                  {
                    title: "Delaware County",
                    description: content.delawareCounty
                  },
                  {
                    title: "Southern New Jersey",
                    description: content.southernNJ
                  },
                  {
                    title: "Central New Jersey",
                    description: content.centralNJ
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
            <h3 className="font-bold text-gray-900 text-lg text-center">{content.ctaTitle}</h3>
            <p className="text-gray-600 text-center text-sm">{content.ctaDescription}</p>
            <div className="flex flex-col gap-2 w-full">
              <a href="/contact" className="w-full bg-green-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-green-700 transition">
                {content.ctaButtonText}
              </a>
              <a href={`tel:${content.officePhone}`} className="w-full bg-blue-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-blue-700 transition">
                {content.ctaPhoneText}
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
} 