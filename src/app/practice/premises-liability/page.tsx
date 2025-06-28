"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFirmName } from '@/lib/FirmNameContext';

export default function PremisesLiabilityPage() {
  const { firmName } = useFirmName();

  return (
    <div>
      <Header currentPage="practice" />

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>Premises Liability</h2>
          <p>Expert representation for slip and fall accident victims</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="practice-detailed-content">
          <div className="practice-main-image-container">
            <Image 
              src="/photos/slipnfall.jpg" 
              alt="Premises Liability Lawyers" 
              width={600} 
              height={400}
              className="practice-main-image"
            />
          </div>
          
          <div className="practice-text-content">
            <h1 className="practice-title">Premises Liability</h1>
            
            <div className="practice-description">
              <p>
                Property owners, landlords and property managers have an obligation to keep their premises safe. If they fail to do so, they may have been negligent in their duties and may be liable for the damages, losses and injuries they've caused. At the {firmName}, our firm will thoroughly investigate your dangerous premises claim and work diligently to arrive at a timely settlement or proceed to trial in order to obtain the compensation you deserve. The firm uses a combination of aggressive discovery, site visits, witness interviews, meetings with expert engineers and/or architects, close examination of medical records, private investigators and assistance of medical and other experts to provide clients with state-of-the-art legal representation.
              </p>
              
              <p>
                Problems such as slippery floors, broken concrete, untreated snow and ice, dangerous sidewalks, potholes in walking surfaces, low ceilings, tripping hazards, dangerous holes, defective stairways, defective handrails, broken steps, and dangerous conditions of commercial stores, pose serious risks to invited guests who have no knowledge of the defect(s).
              </p>
              
              <p>
                A premises liability case occurs when a person is involved in a serious accident that takes place as a result of unsafe conditions, a defect, or negligent maintenance of property that is owned by a person other than the accident victim. The most common type of premises liability related accident in the U.S. is a slip and fall accident. There are countless places where premises liability accidents may take place, such as shopping malls, apartment buildings, and grocery stores. The landlords, employers and companies are all responsible for the equipment they operate or property they hold. If the premises are not managed and maintained properly, it increases the risk of someone getting hurt as a result.
              </p>
              
              <p>
                Injuries from premises defects can also be devastating ranging from brain injuries, to broken bones, to internal injuries which require surgery. Quadriplegia and paraplegia can also be caused by back and neck injuries from premises defects.
              </p>
              
              <p>
                Most buildings and premises are governed by building and safety codes which require that the property meet or exceed certain standards. Often, to save money, building or landowners fail to comply with these codes thereby posing serious safety hazards. When these codes are updated to address safety concerns, premises owners often fail to bring their property up to standard. Premises experts such as architects, engineers and safety personnel are usually required to examine the premises to expose these code and safety violations.
              </p>
              
              <p>
                Moreover, previous complaints about the defective premises often go unaddressed until litigation is instituted. Investigators and other experts are often necessary to research the prior history of a property regarding these complaints.
              </p>
              
              <p>
                The type of property insurance and the relationships of the various owners and tenants of the property are also issues to consider in a premises liability action. Finger pointing between mutual landowners or between a building owner and lessee is common. Usually, their agreements are important in determining who has the primary responsibility for the defective condition of the property.
              </p>
            </div>

            <div className="practice-features">
              <h2 className="features-title">Examples of Premises Liability Cases:</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>Sidewalk accidents</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Slip and Falls</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Slippery walkways/surfaces</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Construction site accidents</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Accidents at school</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Tripping hazards</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Elevator and escalator injuries</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Inadequate lighting</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Inadequate security</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Cruise ship accidents</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Falling objects</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Snow and Ice Falls</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Parking lot accidents/pot holes</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Broken Concrete and Sidewalks</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Dog bites/dangerous animals</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Fire injury</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Swimming pool accidents</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Dangerous staircase</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Dangerous furniture</h3>
                </div>
              </div>
            </div>

            <div className="practice-features">
              <h2 className="features-title">Premises liability claims may arise anywhere somebody owns or possesses property. Some examples include:</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>Supermarkets</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Hotels</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Motels</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Restaurants</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Arenas</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Stadiums</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Bars</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Amusement Parks</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Retail Stores</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Parking lots</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Parking structures</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Private houses</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Apartments</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Offices</h3>
                </div>
              </div>
            </div>

            <div className="practice-description">
              <p>
                If you and/or a loved one have been injured in a premises liability situation, then the attorneys at {firmName} can help you get fairly compensated. Just because you were injured while on someone else's property does not automatically make them responsible. You must prove all of the elements required under the law to be entitled to compensation. Premises liability matters are extremely time-sensitive and it is important to act promptly to preserve evidence, investigate the cause of the injury, and to file a lawsuit prior to the deadlines imposed by statute of limitations. If you wait too long your case could be destroyed. We provide a free initial consultation to meet with you to discuss the strength of your case and evaluate how to best represent and help you. There are no fees paid unless and until we win your case and you receive a financial recovery.
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
                <p className="quick-contact-note">Available 24/7 for emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 