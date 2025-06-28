"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFirmName } from '@/lib/FirmNameContext';

export default function TruckAccidentsPage() {
  const { firmName } = useFirmName();

  return (
    <div>
      <Header currentPage="practice" />

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>Truck Accidents</h2>
          <p>Expert representation for truck and commercial vehicle accident victims</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="practice-detailed-content">
          <div className="practice-main-image-container">
            <Image 
              src="/photos/truck-accident.jpg" 
              alt="Truck Accident Lawyers" 
              width={600} 
              height={400}
              className="practice-main-image"
            />
          </div>
          
          <div className="practice-text-content">
            <h1 className="practice-title">Truck Accident Lawyers</h1>
            
            <div className="practice-service-areas">
              <h2 className="service-areas-title">Our Service Areas</h2>
              <div className="service-areas-list">
                <p>PHILADELPHIA TRUCK ACCIDENT ATTORNEY</p>
                <p>BUCKS COUNTY TRUCK ACCIDENT ATTORNEY</p>
                <p>MONTGOMERY COUNTY TRUCK ACCIDENT ATTORNEY</p>
                <p>SOUTH JERSEY TRUCK ACCIDENT ATTORNEY</p>
                <p>NEW JERSEY TRUCK ACCIDENT ATTORNEY</p>
                <p>PENNSYLVANIA TRUCK ACCIDENT ATTORNEY</p>
              </div>
            </div>
            
            <div className="practice-description">
              <p>
                In any accident involving a 3,000 pound car and a 60,000 pound truck, the news is not good for the car, its passengers or its driver. Truck accidents differ from car accidents in many ways and often involve much more serious injuries. Common causes of large truck crashes involving serious personal injuries and wrongful death in Pennsylvania, New Jersey and Florida include:
              </p>
            </div>

            <div className="practice-features">
              <h2 className="features-title">Common Causes of Truck Accidents:</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>Truck driver fatigue</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Improper cargo loading</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Poor vehicle maintenance</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Truck driver use of drugs or alcohol</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Brake malfunctioning or brake failure</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Truck jackknifing</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Defective highway design</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Poorly maintained streets</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Overloaded trucks</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Debris falling from vehicles</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Unsafe passing</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Crosswinds</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Bad weather conditions</h3>
                </div>
              </div>
            </div>

            <div className="practice-description">
              <p>
                Our Philadelphia, Bucks County, Montgomery County, South Jersey Pennsylvania, New Jersey, and Florida truck accident attorneys will investigate every circumstance surrounding your truck crash, and determine which parties caused the accident and are responsible for your injuries.
              </p>
              
              <p>
                Truck drivers and their employers throughout the United States, Canada, and Mexico are held to a high standard regarding equipment and allowed driving hours by the Federal Motor Carrier Safety Administration (a division of the United States Department of Transportation) and the Pennsylvania Department of Transportation, New Jersey Department of Transportation, and the Florida Department of Transportation. Truck drivers in the United States must have a Class A commercial drivers license if they are operating a vehicle with a gross vehicle weight rating of more than 26,000 pounds. To obtain a commercial drivers license, truck drivers must be finger printed, drug tested, able to speak English and read road signs, and demonstrate that they are capable of safely driving a large commercial vehicle. After an accident, the truck accident law firm of {firmName} can help you determine if the driver and trucking company are in compliance with all regulations.
              </p>
            </div>

            <div className="practice-features">
              <h2 className="features-title">Types of Large Vehicles We Handle:</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>Semi-trailer trucks (also known as big-rig trucks or 18 wheeler trucks)</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Tractor-trailer trucks</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Dump trucks (used for transporting sand, rock or gravel)</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Garbage trucks (used for transporting trash to landfills)</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Delivery trucks</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Auto-transport trucks</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Tanker trucks</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Ambulances</h3>
                </div>
              </div>
            </div>

            <div className="practice-description">
              <p>
                After a truck collision, it is critical to record facts and preserve evidence immediately. The truck involved in the crash may be moved hundreds of miles away within hours of an accident. It may be quickly repaired and back on the road within the course of a few days. If you have been seriously injured or lost a loved one in a truck accident in Philadelphia, Bucks County, Montgomery County, South Jersey, Pennsylvania, New Jersey, or Florida the law firm of {firmName} can help you preserve evidence from the accident. On your behalf, we will request that the trucking company preserve the following types of evidence:
              </p>
            </div>

            <div className="practice-features">
              <h2 className="features-title">Evidence We Preserve:</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>Driver record logs</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Previous incident reports involving the driver</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Compliance audits</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Satellite tracking information</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Electronic control units (black boxes)</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Communications between driver and dispatcher</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Police, fire and rescue reports</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Tow company records</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Pre-trip inspection reports</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Post-trip inspection reports</h3>
                </div>
                
                <div className="feature-item">
                  <h3>Annual inspection reports</h3>
                </div>
              </div>
            </div>

            <div className="practice-description">
              <p>
                At {firmName}, our attorneys will work with top expert witnesses on all aspects of a truck crash, including driver abilities and skills, record log books, Federal Motor Carrier Safety Administration regulations, maintenance requirements and proper loading and unloading practices.
              </p>
              
              <p>
                To talk to one of the qualified Philadelphia, Bucks County, Montgomery County, South Jersey, Pennsylvania, New Jersey, and Florida truck crash lawyers at {firmName}, contact us at (215) 259-5958. You may also fill out the case contact form on this web site and an attorney will contact you right away. A consultation is always free and confidential. The lawyers at {firmName}, will be happy to explain the legal process to you and answer any truck accident questions you may have.
              </p>
              
              <p>
                At {firmName}, all legal work in truck accident cases is performed on a contingent fee basis. There is never a fee for legal services unless we recover a settlement or judgment for you. If there is no recovery, you do not owe us anything. Contact us today.
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