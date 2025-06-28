"use client";

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFirmName } from '@/lib/FirmNameContext';

export default function DefectiveProductsPage() {
  const { firmName } = useFirmName();

  return (
    <div>
      <Header currentPage="practice" />

      {/* Hero Section */}
      <section className="hero-professional">
        <div className="hero-content">
          <h2>Defective Products</h2>
          <p>Expert representation for defective product injury victims</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="practice-detailed-content">
          <div className="practice-main-image-container">
            <Image 
              src="/photos/products.jpg" 
              alt="Defective Products Lawyers" 
              width={600} 
              height={400}
              className="practice-main-image"
            />
          </div>
          
          <div className="practice-text-content">
            <h1 className="practice-title">Defective Products</h1>
            
            <div className="practice-description">
              <p>
                Have you ever been injured by a dangerous or defective product? Contact one of our product liability lawyers at {firmName} today in Philadelphia, Bucks County, Montgomery County, South Jersey and throughout Pennsylvania, New Jersey, and Florida for a free consultation.
              </p>
              
              <h2>What is Products Liability? Why do I need a Products Liability Lawyer?</h2>
              
              <p>
                It should be a given that the all products are safe when they are used properly. Unfortunately, individuals are injured by products and devices they use on a daily basis. Automobile failures and defects with air bags, seat belts, tires, electrical systems, etc., can leave a driver and passengers with serious injuries. When power tools and other construction equipment fail, workers can be maimed and property can be damaged, leading to products liability claims in addition to workers compensation. Household items, such as chairs, tables, cribs, and children's toys, that are improperly manufactured can be dangerous by design or simply break during use and pose a threat to the homeowner and their family. The medical world, which is meant to protect and save lives can also put one's life at risk with the use of faulty medical devises, prostheses, and dangerous drugs and pharmaceuticals. The list of products that can endanger a consumer's life goes on with some defects resulting in serious personal injury or even death.
              </p>
              
              <p>
                Product liability laws require the designers, manufacturers, and distributors of the dangerous and defective item to pay any costs that are a result of the injuries caused by the defective merchandise. Product liability lawyers work to have the responsible party cover the expenses of the victim.
              </p>
              
              <p>
                There are three primary areas of products liability claims: Negligence, Breach of Warranty, and Strict Liability.
              </p>
            </div>

            <div className="practice-features">
              <h2 className="features-title">Types of Product Liability Claims:</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>Negligence</h3>
                  <p>Negligence claims in products liability cases examine the reasonableness of the defendant's conduct. The manufacturer needs to show that the proper steps were taken in the design, manufacture, inspection, and testing of the product in question. The manufacturers and distributors must also provide the necessary warnings to alert the consumer of potential dangerous uses and conditions. If a client is injured as a result of the manufacturer or distributor's failure to follow these responsibilities, they can be held liable for negligence.</p>
                </div>
                
                <div className="feature-item">
                  <h3>Breach of Warranty</h3>
                  <p>Breach of Warranty liability is based on contract law. Sales contracts contain both implied and express warranties that a product will function and perform in a particular way. If any of the warranties are broken, the injured party can recover the damages related to their injuries. Some of these disclaimers and warranties can be found in the fine print of the product's packaging and in the sales contracts.</p>
                </div>
                
                <div className="feature-item">
                  <h3>Strict Products Liability</h3>
                  <p>Because negligence is often difficult to prove and warranties are often times excluded in the disclaimers, strict products liability claims do not require the lawyer to prove fault of the designer, manufacturer, or seller. A strict liability claim only requires the product to be proven defective prior to the release or sale of the product and that the defect caused injuries and damages. The injured party can prove the product was defective in three areas: design, manufacturing, or failure to warn.</p>
                </div>
              </div>
            </div>

            <div className="practice-features">
              <h2 className="features-title">Types of Product Defects:</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>Design Defects</h3>
                  <p>Design defects occur during the design phase. When there is a flaw in the design, typically, every product in the product line is defective. A product is considered to have a design defect if there is a calculable risk of injury that could have been reduced or removed through the use of another better design and that the failure to use the alternate design leads to the item being unsafe.</p>
                </div>
                
                <div className="feature-item">
                  <h3>Manufacturing Defect</h3>
                  <p>Manufacturing defects occur when there is a mistake during the production of the product. Many products coming off an assembly line are safe, but others can slip through the cracks with a defect. Manufacturers may be considered liable for failing to identify the defect before it has been released to the public.</p>
                </div>
                
                <div className="feature-item">
                  <h3>Failure to Warn</h3>
                  <p>Failure to Warn cases typically are based on a product that may be safe when used in one way, but hazardous or dangerous when used in an alternate and foreseeable manner. The product should include understandable, visible, and succinct warnings that explain the danger and consequences if misused. A product that lacks a practical warning can be considered defective.</p>
                </div>
              </div>
            </div>

            <div className="practice-description">
              <h2>Contact our Defective Product Attorneys today!</h2>
              
              <p>
                If you have suffered injuries that are the result of a defective product, keep the product, packaging, receipt, instructions, and labels. All of those items will play a major role in proving your case. These cases can be complex and expensive to pursue. With more than 35 years of Plaintiff's verdicts and settlements, a qualified team of personal injury lawyers, and the resources to front costs in large, complicated cases, the {firmName} law firm will properly evaluate and handle each case. Our greatest satisfaction comes from being able to use our knowledge and skills to help people when they need help the most. We are proud of the settlements we have been able to secure and of the trial success we have had in personal injury and wrongful death lawsuits at all levels in Philadelphia, Bucks County, Montgomery County, South Jersey and throughout Pennsylvania, New Jersey, and Florida.
              </p>
              
              <p>
                In addition to providing skilled and experienced legal representation, we offer exceptionally strong client service. We will be readily accessible throughout your case, to answer any questions or address any concerns. We understand that this can be a stressful and overwhelming time — we work to reduce the difficulties of pursuing legal action. The {firmName} law firm approaches every case as though it were going to trial. Meanwhile in many cases our lawyers are able to resolve the matters by negotiating acceptable, even generous, settlement agreements, always looking out for the best interests of our client.
              </p>
              
              <p>
                If you or a love one has suffered an injury or wrongful death due to a defective product, our personal injury attorneys are prepared to evaluate your claim and help you get fair compensation for your loss.
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