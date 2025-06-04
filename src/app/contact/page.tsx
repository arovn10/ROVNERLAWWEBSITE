import Link from 'next/link';

export default function ContactPage() {
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
              <li><Link href="/contact" className="text-blue-300 whitespace-nowrap">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Contact Us</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
                  <div className="w-24 h-1 bg-blue-600 mb-6"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Please complete all of the information contained in the form below to insure that we are able to contact you after reviewing your responses. The submission of your case information does not mean that our firm is representing you in your matter. No representation will commence until actual written contracts have been executed by both yourself and an authorized member of our firm. The submission of this form does not create an attorney client relationship. A member of our firm will contact you upon receipt of your information to discuss the possibility of our firm's representation of you for your legal concerns.
                  </p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Home Address</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Incident *</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Are you represented by another lawyer for this matter?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center">
                        <input type="radio" name="represented" value="no" className="mr-3 h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">No</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="represented" value="yes" className="mr-3 h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">Yes</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Facts of what happened *</label>
                    <textarea 
                      rows={6} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      required
                    ></textarea>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-xs text-gray-600 mb-3">
                      The submission of the information contained above in this form is not intended to create an attorney-client relationship. There will be no representation of the party submitting this above information for any potential legal claim until that party is contacted by a member of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt ("the Firm") and a formal, written contract is signed by that party and an authorized member of the Firm. The Firm will not be liable for any time limitations or representation in any legal matter raised by the use of this internet web site.
                    </p>
                    <label className="flex items-start">
                      <input type="checkbox" className="mr-3 mt-1 h-4 w-4 text-blue-600" required />
                      <span className="text-sm text-gray-700">*I understand and agree to the above terms</span>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-md font-bold text-lg transition-colors shadow-md"
                  >
                    SEND MESSAGE
                  </button>
                </form>
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

              {/* Contact Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Contact Information</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Pennsylvania Office</h4>
                    <p>175 Bustleton Pike<br />Feasterville-Trevose, PA 19053</p>
                    <p className="text-xl font-bold text-blue-600 mt-2">215-259-5958</p>
                    <p>rovners@dial-law.com</p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-green-600 mb-2">New Jersey Office</h4>
                    <p>1040 North Kings Highway; Suite 205<br />Cherry Hill, New Jersey 08034-1925</p>
                    <p className="text-lg font-bold text-green-600 mt-2">(856) 795-5111</p>
                    <p>jersey@dial-law.com</p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-orange-600 mb-2">Florida Office</h4>
                    <p className="text-lg font-bold text-orange-600">(888) LAW-8300</p>
                    <p>florida@dial-law.com</p>
                  </div>
                </div>
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