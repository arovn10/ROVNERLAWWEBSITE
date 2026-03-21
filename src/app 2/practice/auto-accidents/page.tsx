"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import MobileNav from '@/components/MobileNav';
import { useFirmName } from '@/lib/FirmNameContext';
import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function AutoAccidentsPage() {
  const { firmName } = useFirmName();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
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
        <section className="hero-professional">
          <div className="hero-content">
            <h2>Auto Accidents</h2>
            <p>Expert representation for motor vehicle accident victims</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="practice-detailed-content">
            <div className="practice-main-image-container">
              <Image 
                src="/photos/auto-accidents.jpg" 
                alt="Auto Accident Lawyers" 
                width={600} 
                height={400}
                className="practice-main-image"
              />
            </div>
            
            <div className="practice-text-content">
              <h1 className="practice-title">Automotive Accident Lawyers</h1>
              <div className="practice-subtitle">
                <p>Accidents Free Initial Consultation</p>
                <p>No Fee if No Recovery!</p>
              </div>
              
              <div className="practice-service-area">
                <p><strong>Serving Philadelphia, New Jersey, Pennsylvania, especially Bucks County, Montgomery County, Delaware County, Mercer County, Camden County, Atlantic County, and Burlington County</strong></p>
              </div>
              
              <div className="practice-description">
                <p>
                  At {firmName}, we represent drivers, passengers, pedestrians and other people who have been involved in motor vehicle accidents and car accidents. If you have been injured, we can help you understand your legal options and develop a strategy for maximizing compensation.
                </p>
                
                <p>
                  We all see enough accidents on our daily commutes to know how dangerous driving can be. If you've been injured in an auto accident, it can be incredibly difficult to receive full and fair compensation for your injuries. With multiple insurance companies and a myriad of paperwork and red tape to cut through, you need an experienced and professional legal team on your side. {firmName} has the background you need with over 40 years of experience in winning successful judgments for our clients. The pain and suffering from a car accident can last a lifetime, and it's critical to have the best possible legal assistance. With our proven results, we at {firmName}, are there for you. You don't need to navigate the legal complexities on your own, if you have been included in any motor accident issue. With high professionalism and quality legal representation, we are committed to provide you with perfect assistance in motor accident cases.
                </p>
                
                <p>
                  Our car accident attorneys have a full-time investigator on staff who can be dispatched to the scene of the vehicle accident promptly after you report your injury to us. Our investigator will document the conditions under which the accident occurred, photograph the scene and the vehicles, gather evidence, and interview any witnesses.
                </p>
                
                <p>
                  If your or a member of your family was injured in a car accident, trucking accident, motorcycle, bicycle, pedestrian, SEPTA, or other motor vehicle related accident, you need to focus on healing. However, the flood of medical bills and pressure by insurance company claims representatives hinder this focus. Whether your car accident, trucking accident, motorcycle, bicycle, pedestrian, SEPTA, or other motor vehicle related accident resulted in minor injuries and property damage, or if your accident was fatal or the damage was more extensive, we can help.
                </p>
                
                <p>
                  Call the Rovner Law Offices immediately to discuss expenses and insurance issues regarding your motor vehicle accident. Also, if you were offered a settlement from an insurance company to resolve your claims we can evaluate whether the offer is fair.
                </p>
              </div>

              <div className="practice-features">
                <h2 className="features-title">Our Motor Accident Services Include:</h2>
                <div className="features-list">
                  <div className="feature-item">
                    <h3>Tractor Trailer and Trucking Accidents</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Commercial/Work Vehicle Accidents</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Motorcycle Accidents</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Bicycle Accidents</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Pedestrian Accidents</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>SEPTA, Train, Bus, Subway and Public Transportation Accidents</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Airline and Aviation Injuries</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Injuries inflicted by Drunk Drivers and those charged/convicted of DUI</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Insurance Coverage Disputes</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Claims Against your insurance company for Bad Faith</h3>
                  </div>
                  
                  <div className="feature-item">
                    <h3>Roadway Design Defects</h3>
                  </div>
                </div>
              </div>

              <div className="practice-description">
                <p>
                  These types of accidents can be caused by a number of reasons including driver error, vehicle defects or poorly-constructed roads. A careful examination of the evidence is demanded in every case to conclude the exact reason for the accident. Attorneys at {firmName} law pursue each case with client-oriented techniques to achieve the best results which includes reimbursing of medical expenses in the proper legal manner.
                </p>
                
                <p>
                  Insurance companies are working from the moment of your accident to prove that they are not responsible for paying for your losses. You need to hire an experienced law firm like {firmName} to investigate your case, preserve all evidence, and set up your claim for payment of your medical bills. We often work with accident reconstructionists and engineers to scientifically prove how the accident which occurred was the other driver's fault. We also work with medical experts, doctors, and artists to easily and demonstratively show the injuries sustained in an accident so they are easily understood by a jury and/or judge.
                </p>
                
                <p>
                  If you or your loved one is involved in any such motor accident, our attorneys are always at your service to protect your legal rights. If you have any such issue, all you require is to contact us and leave the rest on us. We assure top-class attorneys to protect and safeguard your rights. Don't wait then!! Contact us at the earliest!
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
      </div>

      {/* Mobile Content */}
      <div className="block lg:hidden w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
        {/* Mobile Hero Banner */}
        <section className="relative w-full h-44 overflow-hidden flex items-center justify-center rounded-b-3xl shadow-md mb-4">
          <Image
            src="/photos/auto-accidents.jpg"
            alt="Auto Accident Lawyers"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 40%' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>Auto Accidents</h1>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>Expert representation for motor vehicle accident victims</p>
          </div>
        </section>

        {/* Mobile Main Content */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Automotive Accident Lawyers</h2>
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <p className="text-sm font-semibold text-blue-900 mb-2">Free Initial Consultation</p>
              <p className="text-sm font-semibold text-blue-900">No Fee if No Recovery!</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
              <p className="text-sm text-gray-700 font-medium">
                <strong>Serving Philadelphia, New Jersey, Pennsylvania, especially Bucks County, Montgomery County, Delaware County, Mercer County, Camden County, Atlantic County, and Burlington County</strong>
              </p>
            </div>
            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>At {firmName}, we represent drivers, passengers, pedestrians and other people who have been involved in motor vehicle accidents and car accidents. If you have been injured, we can help you understand your legal options and develop a strategy for maximizing compensation.</p>
              <p>We all see enough accidents on our daily commutes to know how dangerous driving can be. If you've been injured in an auto accident, it can be incredibly difficult to receive full and fair compensation for your injuries. With multiple insurance companies and a myriad of paperwork and red tape to cut through, you need an experienced and professional legal team on your side. {firmName} has the background you need with over 40 years of experience in winning successful judgments for our clients. The pain and suffering from a car accident can last a lifetime, and it's critical to have the best possible legal assistance. With our proven results, we at {firmName}, are there for you. You don't need to navigate the legal complexities on your own, if you have been included in any motor accident issue. With high professionalism and quality legal representation, we are committed to provide you with perfect assistance in motor accident cases.</p>
              <p>Our car accident attorneys have a full-time investigator on staff who can be dispatched to the scene of the vehicle accident promptly after you report your injury to us. Our investigator will document the conditions under which the accident occurred, photograph the scene and the vehicles, gather evidence, and interview any witnesses.</p>
              <p>If your or a member of your family was injured in a car accident, trucking accident, motorcycle, bicycle, pedestrian, SEPTA, or other motor vehicle related accident, you need to focus on healing. However, the flood of medical bills and pressure by insurance company claims representatives hinder this focus. Whether your car accident, trucking accident, motorcycle, bicycle, pedestrian, SEPTA, or other motor vehicle related accident resulted in minor injuries and property damage, or if your accident was fatal or the damage was more extensive, we can help.</p>
              <p>Call the Rovner Law Offices immediately to discuss expenses and insurance issues regarding your motor vehicle accident. Also, if you were offered a settlement from an insurance company to resolve your claims we can evaluate whether the offer is fair.</p>
            </div>

            {/* Mobile Services */}
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Our Motor Accident Services Include:</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Tractor Trailer and Trucking Accidents",
                  "Commercial/Work Vehicle Accidents",
                  "Motorcycle Accidents",
                  "Bicycle Accidents",
                  "Pedestrian Accidents",
                  "SEPTA, Train, Bus, Subway and Public Transportation Accidents",
                  "Airline and Aviation Injuries",
                  "Injuries inflicted by Drunk Drivers and those charged/convicted of DUI",
                  "Insurance Coverage Disputes",
                  "Claims Against your insurance company for Bad Faith",
                  "Roadway Design Defects"
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <span className="text-gray-800 text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>These types of accidents can be caused by a number of reasons including driver error, vehicle defects or poorly-constructed roads. A careful examination of the evidence is demanded in every case to conclude the exact reason for the accident. Attorneys at {firmName} law pursue each case with client-oriented techniques to achieve the best results which includes reimbursing of medical expenses in the proper legal manner.</p>
              <p>Insurance companies are working from the moment of your accident to prove that they are not responsible for paying for your losses. You need to hire an experienced law firm like {firmName} to investigate your case, preserve all evidence, and set up your claim for payment of your medical bills. We often work with accident reconstructionists and engineers to scientifically prove how the accident which occurred was the other driver's fault. We also work with medical experts, doctors, and artists to easily and demonstratively show the injuries sustained in an accident so they are easily understood by a jury and/or judge.</p>
              <p>If you or your loved one is involved in any such motor accident, our attorneys are always at your service to protect your legal rights. If you have any such issue, all you require is to contact us and leave the rest on us. We assure top-class attorneys to protect and safeguard your rights. Don't wait then!! Contact us at the earliest!</p>
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
            <a href="/locations" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">📍</div>
              <div className="font-semibold text-gray-800 text-sm">Locations</div>
            </a>
            <a href="/practice" className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <div className="text-blue-600 text-2xl mb-2">⚖️</div>
              <div className="font-semibold text-gray-800 text-sm">Practice Areas</div>
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
            <a href="tel:215-259-5958" className="w-full bg-blue-600 text-white font-bold rounded-lg py-4 text-center text-lg shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <Phone size={20} />
              Call 215-259-5958
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
} 