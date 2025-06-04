import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                LAW OFFICES OF
              </h1>
              <h2 className="text-lg lg:text-xl font-semibold text-gray-700">
                Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt
              </h2>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">215-259-5958</div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-md">
                GET A FREE CONSULTATION!
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center lg:justify-start">
            <ul className="flex space-x-6 py-4 text-sm font-medium overflow-x-auto">
              <li><Link href="/" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">HOME</Link></li>
              <li><Link href="/about" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">ABOUT US</Link></li>
              <li><Link href="/attorneys" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">ATTORNEYS</Link></li>
              <li><Link href="/practice" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">PRACTICE</Link></li>
              <li><Link href="/locations" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">LOCATIONS</Link></li>
              <li><Link href="/photo-gallery" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">PHOTO GALLERY</Link></li>
              <li><Link href="/in-the-news" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">IN THE NEWS</Link></li>
              <li><Link href="/radio-show" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">RADIO SHOW</Link></li>
              <li><Link href="/contact" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">RECENT SETTLEMENTS & VERDICTS</h2>
          <p className="text-xl mb-8">Over 40 Years of Fighting for Our Clients</p>
        </div>
      </section>

      {/* Recent Settlements Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">$113,500</div>
              <div className="text-sm text-gray-600 font-medium">LIMITED TORT MOTOR VEHICLE ACCIDENT</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">$50,000</div>
              <div className="text-sm text-gray-600 font-medium">SEPTA BUS ACCIDENT</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">$185,000</div>
              <div className="text-sm text-gray-600 font-medium">TRIP AND FALL ACCIDENT</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">$140,000</div>
              <div className="text-sm text-gray-600 font-medium">VERBAL THRESHOLD MOTOR VEHICLE ACCIDENT</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">$120,000</div>
              <div className="text-sm text-gray-600 font-medium">FALL ON SLIPPERY FLOOR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Auto Accidents */}
            <div className="text-center bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img src="/photos/auto-accidents.jpg" alt="Auto Accident" className="w-full h-48 object-cover rounded-lg mb-4" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">AUTO ACCIDENTS</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                No Fee if No Recovery! If you have been injured in a motor vehicle accident, we can help you understand your legal options and develop a strategy for maximizing compensation.
              </p>
              <Link href="/practice" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-md inline-block">
                LEARN MORE &gt;
              </Link>
            </div>

            {/* Personal Injury */}
            <div className="text-center bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img src="/photos/personal-inury.jpg" alt="Personal Injury" className="w-full h-48 object-cover rounded-lg mb-4" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">PERSONAL INJURY</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Our team of over 15 lawyers plus our paralegals, investigators, experts, all with hundreds of years of combined experience, put us at the top of the legal profession.
              </p>
              <Link href="/practice" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-md inline-block">
                LEARN MORE &gt;
              </Link>
            </div>

            {/* Medical Malpractice */}
            <div className="text-center bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img src="/photos/medical.jpg" alt="Medical Malpractice" className="w-full h-48 object-cover rounded-lg mb-4" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">MEDICAL MALPRACTICE</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Even well-meaning doctors make mistakes that can have a devastating effect on a patient's health. If you or someone you love has been a victim of medical malpractice contact us today.
              </p>
              <Link href="/practice" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-md inline-block">
                LEARN MORE &gt;
              </Link>
            </div>

            {/* Premises Liability */}
            <div className="text-center bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <img src="/photos/premises.jpg" alt="Premises Liability" className="w-full h-48 object-cover rounded-lg mb-4" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">PREMISES LIABILITY</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Property owners, landlords and property managers have an obligation to keep their premises safe. If they fail to do so, they may be liable for the damages, losses and injuries they've caused.
              </p>
              <Link href="/practice" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-md inline-block">
                LEARN MORE &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h2>
                  <div className="w-24 h-1 bg-blue-600 mb-6"></div>
                  <h3 className="text-xl font-bold text-blue-600 mb-6">Premier Injury Lawyers</h3>
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    For over 40 years, the Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt have been fighting for clients in Philly who have been victims of negligence, auto accidents, personal injury, medical malpractice and premise liability and need an injury lawyer to properly represent them.
                  </p>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Auto Accidents</h4>
                    <p>
                      When in need of a <Link href="/practice" className="text-blue-600 underline hover:text-blue-800">Philadelphia auto accident lawyer</Link>, our injury lawyer team is ready to offer their services in the Philly area. We provide a free initial consultation and do not charge a fee if there is no recovery. We proudly serve Pennsylvania and New Jersey, especially Philadelphia, Bucks County, Montgomery County, Delaware County, Mercer County, Camden County, Atlantic County and Burlington County.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Personal Injury</h4>
                    <p>
                      Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt has a team of lawyers with proven success in representing injured parties. Whether you have suffered because of a motor vehicle accident, motorcycle accident, due to the condition of a property, medical mistake, or defective product, we will pursue financial compensation for you. With dedicated professionalism and personal attention, hiring a <Link href="/practice" className="text-blue-600 underline hover:text-blue-800">personal injury attorney from our firm in Bucks County</Link> will help you receive the best settlement for your injury.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Medical Malpractice</h4>
                    <p>
                      Most medical workers are responsible professionals who are committed to their patients. However, even well-meaning doctors make mistakes that can have a devastating effect on a patient's health. Whether you have suffered harm because of a surgical error, misdiagnosis, drug dispensing error or failure to diagnose cancer, we will pursue financial compensation for you. Being represented by an injury lawyer on your side can make all the difference.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Premises Liability</h4>
                    <p>
                      Property owners, landlords and property managers have an obligation to keep their premises safe. If they fail to do so, they may have been negligent in their duties and may be liable for the damages, losses and injuries they have caused you. We will carefully develop and scrutinize your claim and work hard so you can obtain the compensation you deserve.
                    </p>
                  </div>

                  <p>
                    Other areas of law that we focus on are defective products, workers' compensation, divorce, family law, criminal defense, social security disability, real estate and general legal matters.
                  </p>

                  <p>
                    Those in need of an injury lawyer in Pennsylvania and New Jersey, specifically Philadelphia, Bucks County, Montgomery County and Camden can turn to us for the representation they deserve. Whether you need a <Link href="/practice" className="text-blue-600 underline hover:text-blue-800">divorce attorney</Link> in Bucks County or live in <Link href="/practice" className="text-blue-600 underline hover:text-blue-800">Montgomery County and need a slip and fall lawyer</Link>, we will be glad to help you.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Practice Areas Box */}
              <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center">PRACTICE AREAS:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="bg-blue-500 hover:bg-blue-400 p-3 rounded text-center transition-colors cursor-pointer">Personal Injury</li>
                  <li className="bg-blue-500 hover:bg-blue-400 p-3 rounded text-center transition-colors cursor-pointer">Auto Accidents</li>
                  <li className="bg-blue-500 hover:bg-blue-400 p-3 rounded text-center transition-colors cursor-pointer">Motorcycle Accidents</li>
                  <li className="bg-blue-500 hover:bg-blue-400 p-3 rounded text-center transition-colors cursor-pointer">Truck Accidents</li>
                  <li className="bg-blue-500 hover:bg-blue-400 p-3 rounded text-center transition-colors cursor-pointer">Premises Liability</li>
                  <li className="bg-blue-500 hover:bg-blue-400 p-3 rounded text-center transition-colors cursor-pointer">Medical Malpractice</li>
                  <li className="bg-blue-500 hover:bg-blue-400 p-3 rounded text-center transition-colors cursor-pointer">Defective Products</li>
                  <li className="bg-blue-500 hover:bg-blue-400 p-3 rounded text-center transition-colors cursor-pointer">Workers' Compensation</li>
                  <li className="bg-blue-500 hover:bg-blue-400 p-3 rounded text-center transition-colors cursor-pointer">Divorce/ Family Law/ Custody</li>
                  <li className="bg-blue-500 hover:bg-blue-400 p-3 rounded text-center transition-colors cursor-pointer">Criminal Defense</li>
                  <li className="bg-blue-500 hover:bg-blue-400 p-3 rounded text-center transition-colors cursor-pointer">Social Security Disability</li>
                  <li className="bg-blue-500 hover:bg-blue-400 p-3 rounded text-center transition-colors cursor-pointer">General Legal Matters</li>
                </ul>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Contact Us!</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Home Address</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Incident *</label>
                    <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Are you represented by another lawyer for this matter?</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="represented" value="no" className="mr-2" />
                        No
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="represented" value="yes" className="mr-2" />
                        Yes
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Facts of what happened *</label>
                    <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>
                  <div className="text-xs text-gray-600">
                    <label className="flex items-start">
                      <input type="checkbox" className="mr-2 mt-1" />
                      *I understand and agree that the submission of this form does not create an attorney-client relationship.
                    </label>
                  </div>
                  <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-bold transition-colors">
                    SEND MESSAGE
                  </button>
                </form>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Subscribe to Our Mailing List</h3>
                <form className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Contact Button - Fixed */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-8 rounded-l-lg shadow-lg font-bold text-sm transition-colors transform -rotate-90 origin-center">
          CONTACT US!
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Navigation */}
            <div>
              <h4 className="text-xl font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-300">About</Link></li>
                <li><Link href="/attorneys" className="hover:text-blue-300">Attorneys</Link></li>
                <li><Link href="/locations" className="hover:text-blue-300">Locations</Link></li>
                <li><Link href="/photo-gallery" className="hover:text-blue-300">Photo Gallery</Link></li>
                <li><Link href="/in-the-news" className="hover:text-blue-300">In the News</Link></li>
                <li><Link href="/radio-show" className="hover:text-blue-300">Radio Show</Link></li>
                <li><Link href="/contact" className="hover:text-blue-300">Contact Us</Link></li>
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="text-xl font-bold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/practice" className="hover:text-blue-300">Personal Injury</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300">Automobile Accidents</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300">Motorcycle Accidents</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300">Truck Accidents</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300">Premises Liability</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300">Medical Malpractice</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300">Defective Products</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300">Workers' Compensation</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <div className="text-sm space-y-2">
                <p>175 Bustleton Pike<br />Feasterville-Trevose, PA 19053</p>
                <p className="text-xl font-bold text-blue-300">215-259-5958</p>
                <p>rovners@dial-law.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p className="mb-2">
              The hiring of a lawyer is an important decision that should not be based solely upon advertisements. 
              <Link href="#" className="text-blue-300 hover:underline"> Click here to see our disclaimer policies.</Link>
            </p>
            <p>©1997-2024 by Robert A. Rovner, P.C. All rights reserved. Created, Maintained and Programmed by Steven L. Rovner</p>
            <p className="mt-4 text-xs">
              The submission of the information contained above in this form is not intended to create an attorney-client relationship. There will be no representation of the party submitting this above information for any potential legal claim until that party is contacted by a member of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt ("the Firm") and a formal, written contract is signed by that party and an authorized member of the Firm. The Firm will not be liable for any time limitations or representation in any legal matter raised by the use of this internet website.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
