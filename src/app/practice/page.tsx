import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  return (
    <div style={{backgroundColor: '#fafafa'}}>
      <Header currentPage="practice" />

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
          alignItems: 'start'
        }}>
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1a1a1a',
              margin: '0 0 1.5rem',
              letterSpacing: '-0.01em'
            }}>
              Why Choose Rovner Law?
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#555',
              lineHeight: '1.6',
              margin: '0 0 2rem'
            }}>
              With over 40 years of experience and a team of skilled attorneys, we have successfully handled thousands of cases across multiple practice areas. Our comprehensive approach ensures that you receive expert representation no matter what legal challenges you face.
            </p>

            <div style={{
              background: 'linear-gradient(135deg, #fff8e1 0%, #fff3e0 100%)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid #ffe0b2'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#e65100',
                margin: '0 0 1.5rem'
              }}>
                Our Promise to You
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem'
              }}>
                {[
                  "No fee unless we win your case",
                  "Free initial consultations",
                  "Personalized attention to every case",
                  "Aggressive representation in court",
                  "Proven track record of success"
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem',
                    color: '#555'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#e65100',
                      marginRight: '1rem',
                      flexShrink: '0'
                    }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
            borderRadius: '20px',
            padding: '2.5rem',
            color: 'white',
            textAlign: 'center',
            boxShadow: '0 8px 30px rgba(26, 35, 126, 0.2)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              margin: '0 0 1rem'
            }}>
              Get Started Today
            </h3>
            <p style={{
              fontSize: '1rem',
              margin: '0 0 2rem',
              opacity: '0.9',
              lineHeight: '1.5'
            }}>
              Ready to discuss your legal matter with our experienced team?
            </p>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: 'white',
              color: '#1a237e',
              padding: '1rem 2rem',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}>
              Schedule Free Consultation
            </Link>
            <p style={{
              fontSize: '0.9rem',
              margin: '1.5rem 0 0',
              opacity: '0.8'
            }}>
              Call 215-259-5958 anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export { practiceAreas }; 