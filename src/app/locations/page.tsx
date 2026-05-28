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
    <div className="min-h-screen bg-slate-50/50">
      {/* Desktop Header/Nav */}
      <div className="hidden lg:block w-full">
        <Header currentPage="locations" />
      </div>
      {/* Mobile Header/Nav */}
      <div className="block lg:hidden w-full">
        <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Desktop Hero Banner */}
        <section className="relative w-full aspect-[3/1] min-h-[340px] overflow-hidden bg-slate-900">
          <Image
            src="/photos/banner-building-hero.webp"
            alt="Rovner Law Offices building — 175 Bustleton Pike, Feasterville-Trevose, PA"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-900/95" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <p className="text-amber-200/90 text-xs font-semibold uppercase tracking-[0.2em] mb-2">Find Us</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Our Locations</h1>
            <p className="text-slate-200 text-lg">Serving Pennsylvania and New Jersey</p>
          </div>
        </section>

      {/* Main Content */}
      <section className="section max-w-6xl mx-auto">
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

                <div className="highlight-box orange-highlight">
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
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden w-full">
        {/* Mobile Hero Banner */}
        <section className="relative w-full aspect-[2/1] min-h-[200px] overflow-hidden">
          <Image
            src="/photos/banner-building-hero.webp"
            alt="Rovner Law Offices building — 175 Bustleton Pike, Feasterville-Trevose, PA"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/75 to-slate-900/95" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <p className="text-amber-200/90 text-[10px] font-semibold uppercase tracking-[0.2em] mb-1">Find Us</p>
            <h1 className="font-serif text-2xl font-bold mb-0.5">Our Locations</h1>
            <p className="text-slate-200 text-sm">Serving PA & NJ</p>
          </div>
        </section>

        {/* Mobile Main Content */}
        <section className="px-4 py-6 bg-slate-50/50">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2">{content.mainTitle}</h2>
            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>{content.paragraph1}</p>
              <p>{content.paragraph2}</p>
            </div>

            {/* Mobile Areas We Serve */}
            <div className="bg-orange-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">{content.areasWeServeTitle}</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-slate-900 mb-2">{content.paCountiesTitle}</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {content.paCounties.split('\n').map((county, index) => (
                      <span key={index} className="text-gray-700 text-sm">• {county}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-slate-900 mb-2">{content.njCountiesTitle}</h4>
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
                  <h4 className="font-semibold text-slate-900 text-lg">{content.officeName}</h4>
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
                  <p className="text-gray-700 text-sm"><strong>Phone:</strong> <a href={`tel:${content.officePhone}`} className="text-orange-600">{content.officePhone}</a></p>
                  <p className="text-gray-700 text-sm"><strong>Email:</strong> <a href={`mailto:${content.officeEmail}`} className="text-orange-600">{content.officeEmail}</a></p>
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
                  <h4 className="font-semibold text-slate-900 mb-1">From Philadelphia:</h4>
                  <p className="text-gray-700 text-sm">{content.directionsFromPhilly}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">From New Jersey:</h4>
                  <p className="text-gray-700 text-sm">{content.directionsFromNJ}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-slate-900 mb-1">Parking:</h4>
                  <p className="text-gray-700 text-sm">{content.parkingInfo}</p>
                </div>
              </div>
            </div>

            {/* Mobile Communities We Serve */}
            <div className="bg-orange-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">{content.communitiesTitle}</h3>
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
                    <h4 className="font-semibold text-slate-900 mb-1">{area.title}</h4>
                    <p className="text-gray-700 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Quick Access */}
        <section className="px-4 pt-4 pb-2">
          <h3 className="text-lg font-bold mb-3 text-slate-900">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <a href="/attorneys" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">👥</div>
              <div className="font-semibold text-gray-800 text-sm">Our Attorneys</div>
            </a>
            <a href="/contact" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">📞</div>
              <div className="font-semibold text-gray-800 text-sm">Contact Us</div>
            </a>
            <Link href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">⚖️</div>
              <div className="font-semibold text-gray-800 text-sm">Practice Areas</div>
            </Link>
            <a href="/about" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">ℹ️</div>
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
              <a href="/contact" className="w-full bg-slate-800 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-slate-700 transition">
                {content.ctaButtonText}
              </a>
              <a href={`tel:${content.officePhone}`} className="w-full bg-orange-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-orange-700 transition">
                {content.ctaPhoneText}
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
} 