import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const locations = await prisma.locations.findFirst();
    
    if (!locations) {
      // Create default content if none exists
      const defaultLocations = await prisma.locations.create({
        data: {
          heroTitle: "Our Locations",
          heroSubtitle: "Serving Pennsylvania and New Jersey",
          mainTitle: "Conveniently Located to Serve You",
          paragraph1: "The Law Offices of Rovner Law are strategically located to serve clients throughout Pennsylvania and New Jersey. Our main office is conveniently located in Feasterville-Trevose, PA, providing easy access to clients throughout the Philadelphia metropolitan area.",
          paragraph2: "Whether you're located in Philadelphia, the surrounding suburbs, or across the bridge in New Jersey, our experienced legal team is ready to help you with your legal needs. We understand the local courts and legal landscape, giving us an advantage when representing our clients.",
          areasWeServeTitle: "Areas We Serve",
          paCountiesTitle: "Pennsylvania Counties:",
          paCounties: "Philadelphia County\nBucks County\nMontgomery County\nDelaware County\nChester County",
          njCountiesTitle: "New Jersey Counties:",
          njCounties: "Camden County\nBurlington County\nMercer County\nAtlantic County\nGloucester County",
          paragraph3: "Whether you're located in Philadelphia, the surrounding suburbs, or across the bridge in New Jersey, our experienced legal team is ready to help you with your legal needs. We understand the local courts and legal landscape, giving us an advantage when representing our clients.",
          mainOfficeTitle: "Main Office",
          officeName: "Law Offices of Rovner Law",
          officeAddress: "175 Bustleton Pike\nFeasterville-Trevose, PA 19053",
          officePhone: "215-259-5958",
          officeEmail: "rovners@dial-law.com",
          officeHours: "Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: By Appointment\nSunday: Closed",
          directionsTitle: "Directions & Parking",
          directionsFromPhilly: "Take I-95 North to Street Road Exit. Turn right on Street Road, then left on Bustleton Pike. Our office is on the right.",
          directionsFromNJ: "Take Route 1 North to Street Road Exit. Turn left on Street Road, then left on Bustleton Pike. Our office is on the right.",
          parkingInfo: "Free parking is available in our office complex. Handicap accessible spaces are available near the entrance.",
          communitiesTitle: "Communities We Serve",
          communitiesSubtitle: "Trusted legal representation throughout the region",
          philadelphiaArea: "Center City, Northeast Philadelphia, South Philadelphia, West Philadelphia, North Philadelphia, Northwest Philadelphia",
          bucksCounty: "Doylestown, Newtown, Levittown, Langhorne, Yardley, Bristol, Warminster, Warrington, Chalfont",
          montgomeryCounty: "Norristown, King of Prussia, Lansdale, Pottstown, Conshohocken, Ardmore, Abington, Horsham",
          delawareCounty: "Media, Chester, Upper Darby, Havertown, Broomall, Springfield, Ridley Park, Drexel Hill",
          southernNJ: "Camden, Cherry Hill, Voorhees, Mount Laurel, Marlton, Pennsauken, Haddonfield, Collingswood",
          centralNJ: "Trenton, Princeton, Hamilton, Lawrence, Ewing, Hopewell, Pennington, West Windsor",
          ctaTitle: "Ready to Get Started?",
          ctaDescription: "Contact us today for a free consultation. We're here to help you navigate your legal challenges.",
          ctaButtonText: "Schedule Free Consultation",
          ctaPhoneText: "Call 215-259-5958"
        }
      });
      return NextResponse.json(defaultLocations);
    }
    
    return NextResponse.json(locations);
  } catch (error) {
    console.error('Error fetching locations content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch locations content' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    const locations = await prisma.locations.findFirst();
    
    if (locations) {
      // Update existing content
      const updatedLocations = await prisma.locations.update({
        where: { id: locations.id },
        data: body
      });
      return NextResponse.json(updatedLocations);
    } else {
      // Create new content
      const newLocations = await prisma.locations.create({
        data: body
      });
      return NextResponse.json(newLocations);
    }
  } catch (error) {
    console.error('Error updating locations content:', error);
    return NextResponse.json(
      { error: 'Failed to update locations content' },
      { status: 500 }
    );
  }
} 