"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFirmName } from '@/lib/FirmNameContext';

export default function PersonalInjuryPage() {
  const { firmName } = useFirmName();

  return (
    <div>
      <Header currentPage="practice" />

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>Personal Injury</h2>
          <p>Expert representation for injury victims</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="practice-detailed-content">
          <div className="practice-main-image-container">
            <Image 
              src="/photos/personal-inury.jpg" 
              alt="Personal Injury Lawyers" 
              width={600} 
              height={400}
              className="practice-main-image"
            />
          </div>
          
          <div className="practice-text-content">
            <h1 className="practice-title">Personal Injury Lawyer & Attorney</h1>
            
            <div className="practice-description">
              <p>
                {firmName}'s team of lawyers has proven success in representing injured parties. With dedicated professionalism and personal attention, our lawyers are at the forefront of protecting our clients and getting the results they deserve. Our team of over 15 lawyers, plus our paralegals and investigators, have hundreds of years of combined experience.
              </p>
              
              <p>
                The {firmName} law firm is committed and determined to serving justice and treating our clients with the evenhanded respect that they deserve. Known for our personal contact and close working relationship with our clients, to our professionalism and aggressive pursuit of legality, our firm strives to serve the interests of injured people while taking on those accused of causing our clients pain. Look to us to validate and prove your case utilizing truth and precision.
              </p>
              
              <p>
                At the {firmName} law firm, our personal injury lawyers represent plaintiffs in all areas of personal injury and wrongful death. Our attorneys offer hundreds of combined years of experience in litigating personal injury claims in Philadelphia, Bucks County, Montgomery County, South Jersey and throughout Pennsylvania, New Jersey, and Florida. In this time, we have developed a strong record of success, both inside the courtroom and at the negotiating table.
              </p>
              
              <p>
                Choosing a personal injury lawyer to represent your claim or if you are an attorney choosing an attorney referral for a good client requires serious consideration and the knowledge that you will receive the highest quality of service. With more than 35 years of continuous Plaintiff's verdicts, a qualified team of personal injury lawyers, and the resources to front costs in large, complicated cases, the {firmName} law firm will properly evaluate and handle each case. Our greatest satisfaction comes from being able to use our knowledge and skills to help people when they need help the most. We are proud of the settlements we have been able to secure and of the trial success we have had in personal injury and wrongful death lawsuits at all levels in Philadelphia, Bucks County, Montgomery County, South Jersey and throughout Pennsylvania, New Jersey, and Florida.
              </p>
            </div>

            <div className="practice-features">
              <h2 className="features-title">Types of Cases We Handle</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>Motor Vehicle Accident</h3>
                  <p>Car accidents, truck accidents, motorcycle accidents, and all types of motor vehicle collisions</p>
                </div>
                
                <div className="feature-item">
                  <h3>Tractor Trailer and Trucking Accidents</h3>
                  <p>Commercial truck accidents and large vehicle collisions</p>
                </div>
                
                <div className="feature-item">
                  <h3>Commercial/Work Vehicle Accidents</h3>
                  <p>Accidents involving work vehicles and commercial transportation</p>
                </div>
                
                <div className="feature-item">
                  <h3>Motorcycle Accidents</h3>
                  <p>Motorcycle collision cases and rider injury claims</p>
                </div>
                
                <div className="feature-item">
                  <h3>Bicycle Accidents</h3>
                  <p>Bicycle collision cases and cyclist injury claims</p>
                </div>
                
                <div className="feature-item">
                  <h3>Pedestrian Accidents</h3>
                  <p>Pedestrian injury cases and crosswalk accidents</p>
                </div>
                
                <div className="feature-item">
                  <h3>SEPTA, Train, Bus, Subway and Public Transportation Accidents</h3>
                  <p>Public transportation accident cases</p>
                </div>
                
                <div className="feature-item">
                  <h3>Airline and Aviation Injuries</h3>
                  <p>Aviation accident cases and airline injury claims</p>
                </div>
                
                <div className="feature-item">
                  <h3>Premises Liability</h3>
                  <p>Slip and falls, snow and ice falls, construction site accidents, accidents at school, broken sidewalks, tripping hazards, elevator and escalator injuries</p>
                </div>
                
                <div className="feature-item">
                  <h3>Medical Malpractice</h3>
                  <p>Complex investigations in many cases reveal medical faults and deficiencies which include failure to timely diagnose a serious medical condition and injuries due to the negligence of a medical provider or facility. The exhaustive investigation and courtroom experience of our medical lawyers, doctors, and experts insure you the results and compensation you deserve.</p>
                </div>
                
                <div className="feature-item">
                  <h3>Wrongful Death</h3>
                  <p>When someone dies as a result of an accident occurring in any of our practice areas, we are experienced in investigating and proving the negligence of the responsible parties to obtain deserving compensation that the family and heirs of the deceased are entitled, to reimburse funeral expenses, recover lost financial earnings and support, compensate for pain and suffering, and to compensate for the lost emotional support, guidance, and other losses caused by the death of a loved one.</p>
                </div>
                
                <div className="feature-item">
                  <h3>Products Liability</h3>
                  <p>Defective manufacturing and design of products are proved to injure thousands of people every year. Our product liability lawyers handle these often complex litigation matters and are able to successfully convey this information to judges and juries to win and recover the highest award you deserve.</p>
                </div>
                
                <div className="feature-item">
                  <h3>Worker's Compensation</h3>
                  <p>Our Workers Compensation Team has represented thousands of clients injured at work to recover lost wages and medical benefits so they can move forward with their lives. After being injured at work, regardless of fault, you deserve help in receiving financial relief and support for yourself and/or your loved ones.</p>
                </div>
                
                <div className="feature-item">
                  <h3>Social Security Disability</h3>
                  <p>If you have been turned down in an application for Social Security Benefits and/or Disability Benefits or simply need help with an application for benefits, call our Social Security attorneys.</p>
                </div>
              </div>
            </div>

            <div className="practice-description">
              <p>
                In addition to providing thorough legal representation, we offer exceptionally strong client service. We will be readily accessible throughout your case, to answer any questions or address any concerns. We understand that this can be a stressful and overwhelming time and we work to reduce the difficulties of pursuing legal action. The {firmName} law firm approaches every case as though it were going to trial. Meanwhile in many cases our lawyers are able to resolve the matters by negotiating acceptable, even generous, settlement agreements, always looking out for the best interests of our client.
              </p>
              
              <p>
                If you or a loved one has suffered an injury or wrongful death due to the negligence of others, our personal injury attorneys are prepared to evaluate your claim and help you get fair compensation for your loss.
              </p>
              
              <p>
                At the law offices of {firmName}, "We Get Results!". If you or a loved one has been injured, contact us today for a free consultation to confidentially speak with one of our attorneys. All you need is to call and leave the rest to us.
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