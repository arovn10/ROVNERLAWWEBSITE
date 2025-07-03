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

const practiceAreas = [
  {
    id: 1,
    title: "Personal Injury",
    description: "Our personal injury attorneys are dedicated to helping victims of negligence recover the compensation they deserve. We handle all types of personal injury cases with skill and compassion.",
    features: [
      "Slip and fall accidents",
      "Wrongful death claims", 
      "Catastrophic injuries",
      "Brain and spinal cord injuries",
      "Burn injuries"
    ],
    image: "/photos/personal-inury.jpg",
    banner: "/photos/banner-personal-injury-1024x128.png",
    color: "blue"
  },
  {
    id: 2,
    title: "Auto Accidents", 
    description: "If you have been injured in a motor vehicle accident, our experienced attorneys can help you understand your legal options and develop a strategy for maximizing compensation.",
    features: [
      "Car accidents",
      "Motorcycle accidents", 
      "Truck accidents",
      "Bicycle accidents",
      "Pedestrian accidents"
    ],
    image: "/photos/auto-accidents.jpg",
    banner: "/photos/banner-auto-1024x128.png", 
    color: "red"
  },
  {
    id: 3,
    title: "Medical Malpractice",
    description: "Even well-meaning doctors make mistakes that can have a devastating effect on a patient's health. If you or someone you love has been a victim of medical malpractice, contact us today.",
    features: [
      "Surgical errors",
      "Misdiagnosis/delayed diagnosis",
      "Medication errors", 
      "Birth injuries",
      "Hospital negligence"
    ],
    image: "/photos/medical.jpg",
    banner: "/photos/banner-medical-1024x128.png",
    color: "green"
  },
  {
    id: 4,
    title: "Premises Liability",
    description: "Property owners have an obligation to keep their premises safe. If they fail to do so, they may be liable for the damages, losses and injuries they've caused.",
    features: [
      "Slip and fall accidents",
      "Trip and fall accidents",
      "Inadequate security",
      "Swimming pool accidents", 
      "Construction site accidents"
    ],
    image: "/photos/premises.jpg",
    banner: "/photos/banner-premises-1024x128.png",
    color: "purple"
  },
  {
    id: 5,
    title: "Workers' Compensation",
    description: "If you've been injured on the job, you may be entitled to workers' compensation benefits. Our experienced attorneys can help you navigate the complex claims process.",
    features: [
      "Workplace injuries",
      "Occupational diseases",
      "Repetitive stress injuries",
      "Construction accidents",
      "Benefits appeals"
    ],
    image: "/photos/workers-comp.jpg",
    banner: "/photos/banner-workers-1024x128.png",
    color: "blue"
  },
  {
    id: 6,
    title: "Product Liability",
    description: "When defective products cause injuries, manufacturers and distributors can be held responsible. We help victims of dangerous and defective products seek justice.",
    features: [
      "Defective automobiles",
      "Dangerous pharmaceuticals",
      "Defective medical devices",
      "Faulty consumer products",
      "Industrial equipment failures"
    ],
    image: "/photos/products.jpg",
    banner: "/photos/banner-products-1024x128.png",
    color: "red"
  },
  {
    id: 7,
    title: "Motorcycle Accidents",
    description: "Motorcycle accidents often result in serious injuries due to the lack of protection. Our attorneys understand the unique challenges motorcyclists face and fight for fair compensation.",
    features: [
      "Lane splitting accidents",
      "Intersection collisions", 
      "Road hazard accidents",
      "Defective motorcycle parts",
      "Insurance claim disputes"
    ],
    image: "/photos/motorcycle.jpg",
    banner: "/photos/banner-motorcycle-1024x128.png",
    color: "green"
  },
  {
    id: 8,
    title: "Truck Accidents",
    description: "Commercial truck accidents can cause devastating injuries and complex legal issues. Our experienced attorneys know how to handle these challenging cases.",
    features: [
      "18-wheeler accidents",
      "Delivery truck accidents",
      "Driver fatigue cases",
      "Improper loading accidents",
      "Commercial vehicle violations"
    ],
    image: "/photos/truck-accident.jpg",
    banner: "/photos/banner-truck-1024x128.png",
    color: "purple"
  },
  {
    id: 9,
    title: "Family Law",
    description: "Our family law attorneys provide compassionate representation during difficult times, helping families navigate complex legal matters with care and understanding.",
    features: [
      "Divorce proceedings",
      "Child custody disputes",
      "Child support matters",
      "Alimony/spousal support",
      "Adoption services"
    ],
    image: "/photos/general.jpg",
    banner: "/photos/banner-family-1024x128.png",
    color: "blue"
  },
  {
    id: 10,
    title: "Criminal Defense",
    description: "If you're facing criminal charges, you need experienced legal representation. Our criminal defense attorneys protect your rights and fight for the best possible outcome.",
    features: [
      "DUI/DWI defense",
      "Drug crime defense",
      "Assault charges",
      "Theft and fraud charges",
      "Traffic violations"
    ],
    image: "/photos/criminal.jpg",
    banner: "/photos/banner-court-1024x128.png",
    color: "red"
  },
  {
    id: 11,
    title: "Social Security Disability",
    description: "When disability prevents you from working, Social Security benefits can provide crucial financial support. We help clients navigate the complex application and appeals process.",
    features: [
      "Initial applications",
      "Appeals and hearings",
      "Disability determinations",
      "Benefits calculations",
      "Ongoing representation"
    ],
    image: "/photos/social-security.jpg",
    banner: "/photos/banner-social-1024x128.png",
    color: "green"
  },
  {
    id: 12,
    title: "General Legal Matters",
    description: "Our experienced team handles a wide range of legal matters, including real estate, landlord-tenant disputes, wills, estates, and probate, providing trusted guidance for your general legal needs.",
    features: [
      "Real Estate",
      "Landlord-Tenant Disputes and Litigation",
      "Wills",
      "Estates and Probate"
    ],
    image: "/photos/general.jpg",
    banner: "/photos/banner-court-1024x128.png",
    color: "blue"
  },
  {
    id: 13,
    title: "Limited Tort Lawyer",
    description: "We help limited tort clients fight for fair compensation and prove their injuries meet the serious injury threshold.",
    features: [
      "Limited tort insurance exceptions",
      "Full tort qualification",
      "Insurance coverage review",
      "Serious injury litigation"
    ],
    image: "/photos/auto-accidents.jpg",
    banner: "/photos/banner-auto-1024x128.png",
    color: "red"
  },
  {
    id: 14,
    title: "Uber Lawyer",
    description: "Injured in an Uber or Lyft? We handle rideshare accident claims and insurance issues for drivers and passengers.",
    features: [
      "Uber/Lyft accident claims",
      "Insurance coverage gaps",
      "Passenger and driver representation",
      "Settlement negotiation"
    ],
    image: "/photos/auto-accidents.jpg",
    banner: "/photos/banner-auto-1024x128.png",
    color: "green"
  },
  {
    id: 15,
    title: "Taxi Lawyer",
    description: "We represent clients injured in taxi accidents, guiding you through claims, insurance, and legal proceedings.",
    features: [
      "Taxi accident claims",
      "Insurance and legal system navigation",
      "Medical bill assistance",
      "Settlement and trial representation"
    ],
    image: "/photos/auto-accidents.jpg",
    banner: "/photos/banner-auto-1024x128.png",
    color: "purple"
  },
  {
    id: 16,
    title: "Septa Bus Accident Lawyer",
    description: "We help victims of SEPTA bus, trolley, and train accidents recover compensation for injuries and losses.",
    features: [
      "SEPTA bus, trolley, and train accidents",
      "Pedestrian and passenger injury claims",
      "Insurance and legal claims",
      "Expert investigation and evidence gathering"
    ],
    image: "/photos/auto-accidents.jpg",
    banner: "/photos/banner-auto-1024x128.png",
    color: "blue"
  }
];

export default function PracticeAreasPage() {
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
                    src={area.image} 
                    alt={area.title}
                    fill
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
                        {area.features.map((feature, index) => (
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
                    <Link href={`/practice/${area.title.toLowerCase().replace(/\s+/g, '-')}`} className="practice-card-btn">
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
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>Practice Areas</h1>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>Comprehensive legal expertise</p>
          </div>
        </section>

        {/* Mobile Practice Areas Grid */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-4">
            {practiceAreas.map((area) => (
              <Link
                key={area.id}
                href={`/practice/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-32">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
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
                    <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
                  </div>
                </div>
              </Link>
            ))}
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
            <a href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📍</div>
              <div className="font-semibold text-gray-800 text-sm">Locations</div>
            </a>
            <a href="/about" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">ℹ️</div>
              <div className="font-semibold text-gray-800 text-sm">About Us</div>
            </a>
          </div>
        </section>

        {/* Mobile Free Consultation */}
        <section className="px-4 pt-4 pb-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col gap-3 p-4 items-center">
            <a href="/contact" className="w-full bg-green-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-green-700 transition flex items-center justify-center gap-2">
              <Mail size={20} />
              Free Consultation
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
} 

export { practiceAreas }; 