import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-gray-900">
                LAW OFFICES OF
              </h1>
              <h2 className="text-xl font-semibold text-gray-700">
                Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt
              </h2>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-4xl font-bold text-blue-600 mb-4">215-259-5958</div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                GET A FREE CONSULTATION!
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <ul className="flex space-x-8 py-4 text-sm font-medium overflow-x-auto">
              <li><Link href="/" className="text-blue-300 hover:text-white transition-colors">HOME</Link></li>
              <li><Link href="/about" className="text-white hover:text-blue-300 transition-colors">ABOUT US</Link></li>
              <li><Link href="/attorneys" className="text-white hover:text-blue-300 transition-colors">ATTORNEYS</Link></li>
              <li><Link href="/practice" className="text-white hover:text-blue-300 transition-colors">PRACTICE</Link></li>
              <li><Link href="/locations" className="text-white hover:text-blue-300 transition-colors">LOCATIONS</Link></li>
              <li><Link href="/photo-gallery" className="text-white hover:text-blue-300 transition-colors">PHOTO GALLERY</Link></li>
              <li><Link href="/in-the-news" className="text-white hover:text-blue-300 transition-colors">IN THE NEWS</Link></li>
              <li><Link href="/radio-show" className="text-white hover:text-blue-300 transition-colors">RADIO SHOW</Link></li>
              <li><Link href="/contact" className="text-white hover:text-blue-300 transition-colors">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">RECENT SETTLEMENTS & VERDICTS</h2>
          <p className="text-xl mb-8">Over 40 Years of Fighting for Our Clients</p>
        </div>
      </section>

      {/* Recent Settlements Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Recent Results</h3>
            <p className="text-lg text-gray-600">We get results for our clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$113,500</div>
                <div className="text-sm text-gray-600 font-medium">LIMITED TORT MOTOR VEHICLE ACCIDENT</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$50,000</div>
                <div className="text-sm text-gray-600 font-medium">SEPTA BUS ACCIDENT</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$185,000</div>
                <div className="text-sm text-gray-600 font-medium">TRIP AND FALL ACCIDENT</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$140,000</div>
                <div className="text-sm text-gray-600 font-medium">VERBAL THRESHOLD MOTOR VEHICLE ACCIDENT</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$120,000</div>
                <div className="text-sm text-gray-600 font-medium">FALL ON SLIPPERY FLOOR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Practice Areas</h3>
            <p className="text-lg text-gray-600">Comprehensive legal services with proven results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Auto Accidents */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  🚗
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">AUTO ACCIDENTS</h3>
                <p className="text-gray-600 text-sm mb-6">
                  No Fee if No Recovery! If you have been injured in a motor vehicle accident, we can help you understand your legal options and develop a strategy for maximizing compensation.
                </p>
                <Link href="/practice" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors">
                  LEARN MORE
                </Link>
              </div>
            </div>

            {/* Personal Injury */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-red-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  ⚖️
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">PERSONAL INJURY</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Our team of over 15 lawyers plus our paralegals, investigators, experts, all with hundreds of years of combined experience, put us at the top of the legal profession.
                </p>
                <Link href="/practice" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors">
                  LEARN MORE
                </Link>
              </div>
            </div>

            {/* Medical Malpractice */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  🏥
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">MEDICAL MALPRACTICE</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Even well-meaning doctors make mistakes that can have a devastating effect on a patient's health. If you or someone you love has been a victim of medical malpractice contact us today.
                </p>
                <Link href="/practice" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors">
                  LEARN MORE
                </Link>
              </div>
            </div>

            {/* Premises Liability */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-purple-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  🏢
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">PREMISES LIABILITY</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Property owners, landlords and property managers have an obligation to keep their premises safe. If they fail to do so, they may be liable for the damages, losses and injuries they've caused.
                </p>
                <Link href="/practice" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors">
                  LEARN MORE
                </Link>
              </div>
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h2>
                  <div className="w-24 h-1 bg-blue-600 mb-6"></div>
                  <h3 className="text-xl font-bold text-blue-600 mb-6">Premier Injury Lawyers</h3>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p>
                    For over 40 years, the Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt have been fighting for clients in Philly who have been victims of negligence, auto accidents, personal injury, medical malpractice and premise liability and need an injury lawyer to properly represent them.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-2">Auto Accidents</h4>
                    <p>
                      When in need of a Philadelphia auto accident lawyer, our injury lawyer team is ready to offer their services in the Philly area. We provide a free initial consultation and do not charge a fee if there is no recovery.
                    </p>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold text-red-600 mb-2">Personal Injury</h4>
                    <p>
                      Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt has a team of lawyers with proven success in representing injured parties. We will pursue financial compensation for you.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-2">Medical Malpractice</h4>
                    <p>
                      Most medical workers are responsible professionals who are committed to their patients. However, even well-meaning doctors make mistakes that can have a devastating effect on a patient's health.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-purple-600 mb-2">Premises Liability</h4>
                    <p>
                      Property owners, landlords and property managers have an obligation to keep their premises safe. If they fail to do so, they may be liable for the damages, losses and injuries they have caused you.
                    </p>
                  </div>

                  <p>
                    Other areas of law that we focus on are defective products, workers' compensation, divorce, family law, criminal defense, social security disability, real estate and general legal matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Practice Areas Box */}
              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-6 text-center">PRACTICE AREAS</h3>
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
                  <input type="text" placeholder="Name *" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="email" placeholder="Email *" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="tel" placeholder="Phone *" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="text" placeholder="Home Address" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="date" placeholder="Date of Incident *" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <textarea rows={4} placeholder="Facts of what happened *" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-bold transition-colors">
                    SEND MESSAGE
                  </button>
                </form>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Subscribe to Our Mailing List</h3>
                <form className="space-y-3">
                  <input type="email" placeholder="Email Address *" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="text" placeholder="First Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="text" placeholder="Last Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
              <h4 className="text-xl font-bold mb-4 text-blue-300">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-300 transition-colors">About</Link></li>
                <li><Link href="/attorneys" className="hover:text-blue-300 transition-colors">Attorneys</Link></li>
                <li><Link href="/locations" className="hover:text-blue-300 transition-colors">Locations</Link></li>
                <li><Link href="/photo-gallery" className="hover:text-blue-300 transition-colors">Photo Gallery</Link></li>
                <li><Link href="/in-the-news" className="hover:text-blue-300 transition-colors">In the News</Link></li>
                <li><Link href="/radio-show" className="hover:text-blue-300 transition-colors">Radio Show</Link></li>
                <li><Link href="/contact" className="hover:text-blue-300 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-300">Practice Areas</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/practice" className="hover:text-blue-300 transition-colors">Personal Injury</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300 transition-colors">Automobile Accidents</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300 transition-colors">Motorcycle Accidents</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300 transition-colors">Truck Accidents</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300 transition-colors">Premises Liability</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300 transition-colors">Medical Malpractice</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300 transition-colors">Defective Products</Link></li>
                <li><Link href="/practice" className="hover:text-blue-300 transition-colors">Workers' Compensation</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-300">Contact Us</h4>
              <div className="text-sm space-y-2">
                <p>175 Bustleton Pike<br />Feasterville-Trevose, PA 19053</p>
                <p className="text-xl font-bold text-blue-300">215-259-5958</p>
                <p>rovners@dial-law.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p className="mb-2 text-gray-300">
              The hiring of a lawyer is an important decision that should not be based solely upon advertisements. 
              <Link href="#" className="text-blue-300 hover:underline"> Click here to see our disclaimer policies.</Link>
            </p>
            <p className="text-gray-400">©1997-2024 by Robert A. Rovner, P.C. All rights reserved. Created, Maintained and Programmed by Steven L. Rovner</p>
            <p className="mt-4 text-xs text-gray-500">
              The submission of the information contained above in this form is not intended to create an attorney-client relationship. There will be no representation of the party submitting this above information for any potential legal claim until that party is contacted by a member of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt ("the Firm") and a formal, written contract is signed by that party and an authorized member of the Firm. The Firm will not be liable for any time limitations or representation in any legal matter raised by the use of this internet website.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
