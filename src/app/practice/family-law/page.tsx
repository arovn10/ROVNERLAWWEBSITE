"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFirmName } from '@/lib/FirmNameContext';

export default function FamilyLawPage() {
  const { firmName } = useFirmName();

  return (
    <div>
      <Header currentPage="practice" />

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>Family Law</h2>
          <p>Expert representation for family law matters</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="practice-detailed-content">
          <div className="practice-main-image-container">
            <Image 
              src="/photos/general.jpg" 
              alt="Family Law Lawyers" 
              width={600} 
              height={400}
              className="practice-main-image"
            />
          </div>
          
          <div className="practice-text-content">
            <h1 className="practice-title">Custody, Divorce & Domestic Lawyer & Attorney</h1>
            
            <div className="practice-features">
              <h2 className="features-title">Types of Family Law Practice:</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>Divorce</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Child Custody</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Child Support</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Alimony</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Paternity</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Prenuptial and Postnuptial Agreements</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Modification of Final Judgment</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Name Changes</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Domestic Violence / Protection from Abuse</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Child Relocation</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Contempt and Enforcement</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Equitable Distribution</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Parental Responsibility</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Step Parent Adoption</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Attorney's Fees and Costs</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Parenting Coordination</h3>
                </div>
              </div>
            </div>

            <div className="practice-description">
              <p>
                Our Family Law focus at the Law Offices of {firmName} is directed exclusively toward helping you resolve your marital and family issues. Divorce, child custody, child support, alimony, and paternity can not only be complicated, but also involve difficult legal decisions. Our in-depth understanding of family law and ability to help clients make tough choices is what drives our practice. We will keep you updated on the progress of your case, explain what comes next and simplify the process for you.
              </p>
              
              <p>
                Whatever your family issues, we welcome the opportunity to assist you. We provide negotiated settlements and mediation, but also offer trial litigation if needed to obtain a favorable outcome. To arrange a consultation to discuss your concerns, please call us today.
              </p>
              
              <p>
                Family problems are always a deep source of stress. When a change is about to take place in your family, you need expert advice. The family issues have to be handled with extreme care and understanding as they are emotionally draining, and the complex legal process can easily become overwhelming. {firmName} family law attorneys have decades of experience and knowledge in dealing with family law issues, divorce and custody. Our competent attorneys will handle and protect you in the challenges you face and options that are available to you. We can minimize your concerns and can guide you through the different stages of your case.
              </p>
              
              <p>
                Competent and experienced legal representation is a must when you face a divorce. At each step of the case, we can guide you with all the possible outcomes so that you are relieved of confusions. Our divorce lawyers have skill and experience in all types of issues related with a divorce case. The decision to end a marriage is very hard.
              </p>
              
              <p>
                Our family law attorneys are experienced, passionate and aggressive and have built a reputation for providing superior representation to all of our clients in Philadelphia, Bucks County, Montgomery County, and throughout Pennsylvania and New Jersey.
              </p>
              
              <p>
                A family law attorney at the firm would be more than happy to discuss your situation, advise you of the costs involved, and provide you with valuable and practical advice on how best to get the representation you need. This is a no-obligation service and we have the utmost respect for your privacy. All contacts are STRICTLY CONFIDENTIAL, and we accept phone calls 24 hours a day, 7 days a week.
              </p>
              
              <p>
                At the law offices of {firmName}, We Get Results! To consult with one of our attorneys confidentially, all you need is to call and leave the rest to us.
              </p>
            </div>

            <div className="practice-action">
              <Link href="/contact" className="practice-cta-btn">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Sidebar */}
      <section className="section practice-why-choose">
        <div className="about-content">
          <div className="about-text">
            <div className="content-title-section">
              <h2 className="content-title">Our Service Areas</h2>
              <div className="accent-bar"></div>
            </div>
            
            <div className="content-text-blocks">
              <div className="highlight-box blue-highlight">
                <h3 className="highlight-title">Practice Areas</h3>
                <ul className="highlight-list">
                  <li><Link href="/practice/personal-injury">Personal Injury</Link></li>
                  <li><Link href="/practice/auto-accidents">Auto Accidents</Link></li>
                  <li><Link href="/practice/motorcycle-accidents">Motorcycle Accidents</Link></li>
                  <li><Link href="/practice/truck-accidents">Truck Accidents</Link></li>
                  <li><Link href="/practice/premises-liability">Premises Liability</Link></li>
                  <li><Link href="/practice/medical-malpractice">Medical Malpractice</Link></li>
                  <li><Link href="/practice/defective-products">Defective Products</Link></li>
                  <li><Link href="/practice/workers-compensation">Workers' Compensation</Link></li>
                  <li><Link href="/practice/family-law">Divorce/ Family Law/ Custody</Link></li>
                  <li><Link href="/practice/criminal-defense">Criminal Defense</Link></li>
                  <li><Link href="/practice/social-security-disability">Social Security Disability</Link></li>
                  <li><Link href="/practice/general-legal-matters">General Legal Matters</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="sidebar-box contact-form-box">
              <h3 className="sidebar-title">Get Free Consultation</h3>
              <p className="text-center mb-4">Contact us today for a free consultation about your case.</p>
              <Link href="/contact" className="submit-btn w-full text-center">
                Contact Us Now
              </Link>
            </div>

            <div className="sidebar-box quick-contact-box">
              <h3 className="sidebar-title">Quick Contact</h3>
              <div className="quick-contact-content">
                <p>Need immediate assistance? Call us now!</p>
                <a href="tel:215-259-5958" className="phone-cta-btn">215-259-5958</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 