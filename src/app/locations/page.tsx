import Link from 'next/link';

export default function LocationsPage() {
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
              <li><Link href="/locations" className="text-blue-300 whitespace-nowrap">LOCATIONS</Link></li>
              <li><Link href="/photo-gallery" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">PHOTO GALLERY</Link></li>
              <li><Link href="/in-the-news" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">IN THE NEWS</Link></li>
              <li><Link href="/radio-show" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">RADIO SHOW</Link></li>
              <li><Link href="/contact" className="text-white hover:text-blue-300 transition-colors whitespace-nowrap">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Locations</h1>
          <p className="text-xl">Our Locations</p>
          <p className="mt-4">Visit one of our law offices in your area:</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Office Locations */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Pennsylvania Office */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">In Pennsylvania</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h3>
                    <div className="text-gray-700 space-y-2">
                      <p className="font-semibold">175 Bustleton Pike</p>
                      <p>Feasterville, Pennsylvania 19053</p>
                      
                      <div className="space-y-1 mt-4">
                        <p><span className="font-semibold">Toll Free:</span> (888) DIAL-LAW</p>
                        <p><span className="font-semibold">Local:</span> (215) 698-1800 or (215) DIAL-LAW</p>
                        <p><span className="font-semibold">Fax:</span> (215) 355-0940</p>
                        <p><span className="font-semibold">E-mail:</span> <a href="mailto:rovners@dial-law.com" className="text-blue-600 hover:underline">rovners@dial-law.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Jersey Office */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-600 text-white p-3 rounded-full mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">In New Jersey</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h3>
                    <div className="text-gray-700 space-y-2">
                      <p className="font-semibold">1040 North Kings Highway; Suite 205</p>
                      <p>Cherry Hill, New Jersey 08034-1925</p>
                      
                      <div className="space-y-1 mt-4">
                        <p><span className="font-semibold">Toll Free:</span> (888) DIAL-LAW</p>
                        <p><span className="font-semibold">Local:</span> (856) 795-5111 or (856) DIAL-LAW</p>
                        <p><span className="font-semibold">Fax:</span> (856) 429-3839</p>
                        <p><span className="font-semibold">E-mail:</span> <a href="mailto:jersey@dial-law.com" className="text-green-600 hover:underline">jersey@dial-law.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Florida Office */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-600 text-white p-3 rounded-full mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">In Florida</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-orange-600">Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h3>
                    <div className="text-gray-700 space-y-2">
                      <div className="space-y-1">
                        <p><span className="font-semibold">Toll Free:</span> (888) LAW-8300</p>
                        <p><span className="font-semibold">E-mail:</span> <a href="mailto:florida@dial-law.com" className="text-orange-600 hover:underline">florida@dial-law.com</a></p>
                      </div>
                    </div>
                  </div>
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