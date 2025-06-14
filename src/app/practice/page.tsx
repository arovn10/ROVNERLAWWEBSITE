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
  }
];

export default function PracticeAreasPage() {
  return (
    <div>
      <Header currentPage="practice" />

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>Our Practice Areas</h2>
          <p>Comprehensive Legal Services with Proven Results</p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="section">
        <div className="section-title">
          <h3>Legal Services We Provide</h3>
          <p>Over 40 years of experience serving clients throughout Pennsylvania</p>
        </div>
        
        <div className="practice-areas-detailed-grid">
          {practiceAreas.map((area) => (
            <div key={area.id} className="practice-area-detailed-card">
              {/* Banner Image */}
              <div className="practice-banner-container">
                <Image 
                  src={area.banner} 
                  alt={area.title}
                  width={1024}
                  height={128}
                  className="practice-banner-image"
                />
                <div className="practice-banner-overlay">
                  <h3 className="practice-banner-title">{area.title}</h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="practice-detailed-content">
                <div className="practice-main-image-container">
                  <Image 
                    src={area.image} 
                    alt={area.title}
                    width={400}
                    height={200}
                    className="practice-main-image"
                  />
                </div>
                
                <div className="practice-text-content">
                  <p className="practice-description">{area.description}</p>
                  
                  <div className="practice-features">
                    <h4 className="features-title">Areas We Handle:</h4>
                    <ul className="features-list">
                      {area.features.map((feature, index) => (
                        <li key={index} className="feature-item">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="practice-action">
                    <Link href={`/practice/${area.title.toLowerCase().replace(/\s+/g, '-')}`} className="learn-more-btn">
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section practice-why-choose">
        <div className="about-content">
          <div className="about-text">
            <div className="content-title-section">
              <h2 className="content-title">Why Choose Rovner Law for Your Legal Needs?</h2>
              <div className="accent-bar"></div>
            </div>

            <div className="content-text-blocks">
              <p className="content-text">
                With over 40 years of experience and a team of skilled attorneys, we have successfully handled thousands of cases across multiple practice areas. Our comprehensive approach ensures that you receive expert representation no matter what legal challenges you face.
              </p>

              <div className="highlight-box gold-highlight">
                <h3 className="highlight-title">Our Promise to You</h3>
                <ul className="highlight-list">
                  <li>No fee unless we win your case</li>
                  <li>Free initial consultations</li>
                  <li>Personalized attention to every case</li>
                  <li>Aggressive representation in court</li>
                  <li>Proven track record of success</li>
                  <li>Available 24/7 for emergencies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="sidebar-box contact-form-box">
              <h3 className="sidebar-title">Get Started Today</h3>
              <div className="consultation-content">
                <p>Ready to discuss your legal matter with our experienced team?</p>
                <Link href="/contact" className="phone-cta-btn">Schedule Free Consultation</Link>
                <p className="quick-contact-note">Call 215-259-5958 anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 