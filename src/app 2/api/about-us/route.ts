import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const aboutUs = await prisma.aboutUs.findFirst();
    
    if (!aboutUs) {
      // Create default content if none exists
      const defaultAboutUs = await prisma.aboutUs.create({
        data: {
          heroTitle: "About Our Firm",
          heroSubtitle: "Rovner Law",
          mainTitle: "Rovner Law",
          paragraph1: "When you are seriously injured there is only one law firm to call. The Law Offices of Rovner Law. For over 40 years the Rovner Law Firm has been accomplishing its motto of getting results for many thousands of grateful and satisfied clients in Pennsylvania, New Jersey, and Florida.",
          paragraph2: "The firm was founded by former Pennsylvania State Senator and Assistant District Attorney, Robert Rovner. Our team of lawyers and paralegals, investigators, experts, all with hundreds of years of combined experience, put us at the top of the Philadelphia Area legal profession.",
          paragraph3: "Widely recognized as one of the largest and most experienced personal injury law firms handling Wrongful Death Cases, Motor Vehicle Accidents, Premises Accidents, Products Liability, and Medical Malpractice; some of our lawyers also focus their experience in other areas from our Workers Compensation team to Divorce, Child Support, Custody, and Domestic Relations, to Criminal Defense, Social Security/Disability and general legal matters such as Real Estate, Landlord-Tenant, Wills, and Estates.",
          paragraph4: "Our team is always there to meet all of your legal needs from our offices in Pennsylvania and New Jersey serving the entire Philadelphia Metropolitan Area and Southern New Jersey including Pennsylvania State Senator, Bucks and Montgomery Counties.",
          blueHighlightTitle: "When you meet with an unexpected injury",
          blueHighlightContent: "Our injury attorneys are there with experienced support to assist you from the very start. We obtain substantial compensation in accident cases and for injured parties. We Get Results",
          paragraph5: "In addition to providing skilled and experienced legal representation, we offer exceptionally strong client service. We will be readily accessible throughout your case, to answer any questions or address any concerns. We understand that this can be a stressful and overwhelming time and we work to reduce the difficulties of pursuing legal action.",
          paragraph6: "The Rovner Law law firm approaches every case as though it were going to trial. Meanwhile in many cases our lawyers are able to resolve the matters by negotiating acceptable, even generous, settlement agreements, always looking out for the best interests of our client.",
          paragraph7: "If you or a love one has suffered an injury or wrongful death due to a defective product, our personal injury attorneys are prepared to evaluate your claim and help you get fair compensation for your loss. In other types of legal representation, we are there for you, working in your corner, to obtain the best possible result under the circumstances",
          goldHighlightTitle: "At the law offices of Rovner Law, \"We Get Results!\"",
          goldHighlightContent: "If you or a loved one has been injured, or is in need of legal representation, contact us today for a free consultation to confidentially speak with one of our attorneys. All you need is to call and leave the rest to us."
        }
      });
      return NextResponse.json(defaultAboutUs);
    }
    
    return NextResponse.json(aboutUs);
  } catch (error) {
    console.error('Error fetching about us content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch about us content' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    const aboutUs = await prisma.aboutUs.findFirst();
    
    if (aboutUs) {
      // Update existing content
      const updatedAboutUs = await prisma.aboutUs.update({
        where: { id: aboutUs.id },
        data: body
      });
      return NextResponse.json(updatedAboutUs);
    } else {
      // Create new content
      const newAboutUs = await prisma.aboutUs.create({
        data: body
      });
      return NextResponse.json(newAboutUs);
    }
  } catch (error) {
    console.error('Error updating about us content:', error);
    return NextResponse.json(
      { error: 'Failed to update about us content' },
      { status: 500 }
    );
  }
} 