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

export default function PersonalInjuryPage() {
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
            <h2>Personal Injury</h2>
            <p>Expert representation for injury victims</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section" style={{padding:'2.5rem 0'}}>
          <div style={{display:'flex',flexDirection:'row',gap:'2.5rem',alignItems:'flex-start',justifyContent:'center',maxWidth:'1100px',margin:'0 auto',flexWrap:'wrap'}}>
            <div style={{flex:'0 0 320px',maxWidth:'320px',width:'100%',display:'flex',alignItems:'flex-start',justifyContent:'center'}}>
              <Image 
                src="/photos/personal-inury.jpg" 
                alt="Personal Injury Lawyers" 
                width={320} 
                height={200}
                style={{borderRadius:'12px',objectFit:'cover',width:'100%',height:'200px',boxShadow:'0 2px 10px rgba(20,28,38,0.07)'}}
              />
            </div>
            <div style={{flex:'1 1 400px',minWidth:'260px',maxWidth:'600px',display:'flex',flexDirection:'column',gap:'1.2rem'}}>
              <h1 className="practice-title" style={{fontSize:'1.45rem',fontWeight:700,margin:'0 0 0.5rem',color:'#1a237e'}}>Personal Injury Lawyer & Attorney</h1>
              <div className="practice-description" style={{fontSize:'1.01rem',color:'#444',lineHeight:1.6,marginBottom:'0.2rem'}}>
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

              <div className="practice-features" style={{background:'#f7fafc',borderRadius:'10px',padding:'1.1rem 1.2rem',margin:'0',boxShadow:'0 1px 4px rgba(20,28,38,0.06)',fontSize:'1.01rem'}}>
                <h2 className="features-title" style={{fontSize:'1.13rem',fontWeight:700,marginBottom:'0.7rem',color:'#1a237e'}}>Types of Cases We Handle</h2>
                <ul style={{padding:'0',margin:'0',listStyle:'none',display:'flex',flexDirection:'column',gap:'0.4rem'}}>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Motor Vehicle Accident</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Tractor Trailer and Trucking Accidents</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Commercial/Work Vehicle Accidents</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Motorcycle Accidents</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Bicycle Accidents</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Pedestrian Accidents</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>SEPTA, Train, Bus, Subway and Public Transportation Accidents</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Airline and Aviation Injuries</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Premises Liability</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Medical Malpractice</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Wrongful Death</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Products Liability</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Worker's Compensation</li>
                  <li style={{background:'#fff',borderRadius:'7px',padding:'0.5rem 1rem',boxShadow:'0 1px 2px rgba(20,28,38,0.04)',fontSize:'0.98rem',color:'#222'}}>Social Security Disability</li>
                </ul>
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

              <div className="practice-action" style={{marginTop:'0.7rem',textAlign:'center'}}>
                <Link href="/contact" className="practice-cta-btn" style={{display:'inline-block',background:'#1a237e',color:'#fff',fontWeight:700,fontSize:'1.01rem',padding:'0.7rem 2.2rem',borderRadius:8,boxShadow:'0 2px 8px rgba(20,28,38,0.10)',textDecoration:'none',letterSpacing:'0.01em',transition:'background 0.2s, box-shadow 0.2s'}}>Get Free Consultation</Link>
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
            src="/photos/personal-inury.jpg"
            alt="Personal Injury Lawyers"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 40%' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-2xl font-bold mb-2" style={{textShadow:'0 2px 8px #000', letterSpacing: '-0.01em'}}>Personal Injury</h1>
            <p className="text-base mb-4 font-medium" style={{textShadow:'0 2px 8px #000'}}>Expert representation for injury victims</p>
          </div>
        </section>

        {/* Mobile Main Content */}
        <section className="px-4 py-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Personal Injury Lawyer & Attorney</h2>
            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>{firmName}'s team of lawyers has proven success in representing injured parties. With dedicated professionalism and personal attention, our lawyers are at the forefront of protecting our clients and getting the results they deserve. Our team of over 15 lawyers, plus our paralegals and investigators, have hundreds of years of combined experience.</p>
              <p>The {firmName} law firm is committed and determined to serving justice and treating our clients with the evenhanded respect that they deserve. Known for our personal contact and close working relationship with our clients, to our professionalism and aggressive pursuit of legality, our firm strives to serve the interests of injured people while taking on those accused of causing our clients pain. Look to us to validate and prove your case utilizing truth and precision.</p>
              <p>At the {firmName} law firm, our personal injury lawyers represent plaintiffs in all areas of personal injury and wrongful death. Our attorneys offer hundreds of combined years of experience in litigating personal injury claims in Philadelphia, Bucks County, Montgomery County, South Jersey and throughout Pennsylvania, New Jersey, and Florida. In this time, we have developed a strong record of success, both inside the courtroom and at the negotiating table.</p>
              <p>Choosing a personal injury lawyer to represent your claim or if you are an attorney choosing an attorney referral for a good client requires serious consideration and the knowledge that you will receive the highest quality of service. With more than 35 years of continuous Plaintiff's verdicts, a qualified team of personal injury lawyers, and the resources to front costs in large, complicated cases, the {firmName} law firm will properly evaluate and handle each case. Our greatest satisfaction comes from being able to use our knowledge and skills to help people when they need help the most. We are proud of the settlements we have been able to secure and of the trial success we have had in personal injury and wrongful death lawsuits at all levels in Philadelphia, Bucks County, Montgomery County, South Jersey and throughout Pennsylvania, New Jersey, and Florida.</p>
            </div>

            {/* Mobile Types of Cases */}
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">Types of Cases We Handle</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Motor Vehicle Accident",
                  "Tractor Trailer and Trucking Accidents", 
                  "Commercial/Work Vehicle Accidents",
                  "Motorcycle Accidents",
                  "Bicycle Accidents",
                  "Pedestrian Accidents",
                  "SEPTA, Train, Bus, Subway and Public Transportation Accidents",
                  "Airline and Aviation Injuries",
                  "Premises Liability",
                  "Medical Malpractice",
                  "Wrongful Death",
                  "Products Liability",
                  "Worker's Compensation",
                  "Social Security Disability"
                ].map((caseType, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <span className="text-gray-800 text-sm font-medium">{caseType}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 text-base text-gray-800 leading-relaxed">
              <p>In addition to providing thorough legal representation, we offer exceptionally strong client service. We will be readily accessible throughout your case, to answer any questions or address any concerns. We understand that this can be a stressful and overwhelming time and we work to reduce the difficulties of pursuing legal action. The {firmName} law firm approaches every case as though it were going to trial. Meanwhile in many cases our lawyers are able to resolve the matters by negotiating acceptable, even generous, settlement agreements, always looking out for the best interests of our client.</p>
              <p>If you or a loved one has suffered an injury or wrongful death due to the negligence of others, our personal injury attorneys are prepared to evaluate your claim and help you get fair compensation for your loss.</p>
              <p>At the law offices of {firmName}, "We Get Results!". If you or a loved one has been injured, contact us today for a free consultation to confidentially speak with one of our attorneys. All you need is to call and leave the rest to us.</p>
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