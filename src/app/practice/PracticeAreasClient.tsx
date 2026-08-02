"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { practiceAreaPath } from '@/lib/practice-areas';

interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  description: string;
  // Stored in the DB as newline-separated string; split on render.
  features: string | null;
  image: string | null;
  banner: string | null;
  color: string | null;
}

const DEFAULT_PRACTICE_IMAGE = '/photos/general.jpg';

export default function PracticeAreasClient({ practiceAreas }: { practiceAreas: PracticeArea[] }) {
  const { firmName } = useFirmName();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{backgroundColor: '#fafafa'}}>
      {/* Desktop Header/Nav */}
      <div className="hidden lg:block w-full">
        <Header currentPage="practice" />
      </div>
      {/* Mobile Header/Nav */}
      <div className="block lg:hidden w-full">
        <MobileHeader isMenuOpen={mobileMenuOpen} onMenuClick={() => setMobileMenuOpen((v) => !v)} />
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block">
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
          padding: '4rem 0',
          textAlign: 'center',
          color: 'white'
        }}>
          <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 2rem'}}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              margin: '0 0 1rem',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}>
              Practice Areas
            </h1>
            <p style={{
              fontSize: '1.25rem',
              fontWeight: '400',
              margin: '0',
              opacity: '0.9',
              lineHeight: '1.5'
            }}>
              Comprehensive legal expertise across all major practice areas
            </p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section style={{
          padding: '5rem 0',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            padding: '0 2rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1a1a1a',
              margin: '0 0 1rem',
              letterSpacing: '-0.01em'
            }}>
              Legal Services
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#666',
              margin: '0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}>
              Over 40 years of experience serving clients throughout Pennsylvania with proven results and dedicated representation.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem',
            padding: '0 2rem'
          }}>
            {practiceAreas.map((area) => (
              <div key={area.id} className="practice-card">
                {/* Image */}
                <div className="practice-card-image-container">
                  <Image
                    src={area.image || DEFAULT_PRACTICE_IMAGE}
                    alt={area.title}
                    fill
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="practice-card-image"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.8) 0%, rgba(57, 73, 171, 0.6) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      margin: '0',
                      textAlign: 'center',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}>
                      {area.title}
                    </h3>
                  </div>
                </div>
                
                {/* Content */}
                <div style={{
                  padding: '2rem'
                }}>
                  <p style={{
                    fontSize: '1rem',
                    color: '#555',
                    lineHeight: '1.6',
                    margin: '0 0 1.5rem',
                    fontWeight: '400'
                  }}>
                    {area.description}
                  </p>
                    
                  <div style={{
                    marginBottom: '2rem'
                  }}>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1a237e',
                      margin: '0 0 1rem'
                    }}>
                      Areas We Handle:
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: '0',
                      margin: '0',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '0.5rem'
                    }}>
                        {(area.features?.split('\n').filter(Boolean) || []).map((feature, index) => (
                        <li key={index} style={{
                          fontSize: '0.9rem',
                          color: '#666',
                          padding: '0.5rem 0',
                          borderBottom: '1px solid #f0f0f0',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <span style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#1a237e',
                            marginRight: '0.75rem',
                            flexShrink: '0'
                          }}></span>
                          {feature}
                        </li>
                        ))}
                      </ul>
                    </div>
                    
                  <div style={{
                    textAlign: 'center'
                  }}>
                    <Link href={practiceAreaPath(area.slug || area.title.toLowerCase().replace(/\s+/g, '-'))} className="practice-card-btn">
                      Learn More
                      </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section style={{
          background: 'white',
          padding: '5rem 0',
          borderTop: '1px solid #f0f0f0'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 1.5rem',
                letterSpacing: '-0.01em'
              }}>
                Why Choose {firmName}?
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1a237e',
                    margin: '0 0 1rem'
                  }}>
                    Experience
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    Over 40 years of combined legal experience with proven results in thousands of cases.
                  </p>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1a237e',
                    margin: '0 0 1rem'
                  }}>
                    Dedication
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    We treat every client like family, providing personalized attention and dedicated representation.
                  </p>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1a237e',
                    margin: '0 0 1rem'
                  }}>
                    Results
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    Our track record speaks for itself - we consistently achieve favorable outcomes for our clients.
                  </p>
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1a237e',
                    margin: '0 0 1rem'
                  }}>
                    Accessibility
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    We're always available to answer your questions and provide updates on your case.
                  </p>
                </div>
              </div>
            </div>
            <div style={{
              textAlign: 'center'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
                padding: '3rem 2rem',
                borderRadius: '1rem',
                color: 'white'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  margin: '0 0 1rem'
                }}>
                  Free Consultation
                </h3>
                <p style={{
                  fontSize: '1rem',
                  margin: '0 0 2rem',
                  opacity: '0.9',
                  lineHeight: '1.5'
                }}>
                  Don't wait to get the legal help you need. Contact us today for a free, confidential consultation.
                </p>
                <Link href="/contact" style={{
                  display: 'inline-block',
                  background: 'white',
                  color: '#1a237e',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}>
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-orange-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-800 to-orange-600" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <p className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>Practice Areas</p>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>Comprehensive legal expertise</p>
          </div>
        </section>

        {/* Mobile Practice Areas Grid */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-4">
            {practiceAreas.map((area) => (
              <Link
                key={area.id}
                href={practiceAreaPath(area.slug)}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-32">
                  <Image
                    src={area.image || DEFAULT_PRACTICE_IMAGE}
                    alt={area.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg" style={{textShadow:'0 2px 8px #000'}}>
                      {area.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {area.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-semibold text-sm">Learn More →</span>
                  </div>
                </div>
              </Link>
            ))}
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
            <Link href="/contact" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">📞</div>
              <div className="font-semibold text-gray-800 text-sm">Contact Us</div>
            </Link>
            <Link href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">📍</div>
              <div className="font-semibold text-gray-800 text-sm">Locations</div>
            </Link>
            <Link href="/about" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-orange-600 text-2xl mb-2">ℹ️</div>
              <div className="font-semibold text-gray-800 text-sm">About Us</div>
            </Link>
          </div>
        </section>

        {/* Mobile Free Consultation */}
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
 