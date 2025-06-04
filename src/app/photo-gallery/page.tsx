import Link from 'next/link';

export default function PhotoGalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">
              LAW OFFICES OF<br />
              <span className="text-lg">Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</span>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-800">215-259-5958</div>
              <button className="bg-blue-500 text-white px-6 py-2 rounded font-bold text-sm">
                GET A FREE CONSULTATION!
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <ul className="flex space-x-8 py-3 text-sm font-medium">
              <li><Link href="/" className="hover:text-blue-300">HOME</Link></li>
              <li><Link href="/about" className="hover:text-blue-300">ABOUT US</Link></li>
              <li><Link href="/attorneys" className="hover:text-blue-300">ATTORNEYS</Link></li>
              <li><Link href="/practice" className="hover:text-blue-300">PRACTICE</Link></li>
              <li><Link href="/locations" className="hover:text-blue-300">LOCATIONS</Link></li>
              <li><Link href="/photo-gallery" className="hover:text-blue-300 text-blue-300">PHOTO GALLERY</Link></li>
              <li><Link href="/in-the-news" className="hover:text-blue-300">IN THE NEWS</Link></li>
              <li><Link href="/radio-show" className="hover:text-blue-300">RADIO SHOW</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Image with Page Title */}
      <section className="relative py-24 bg-cover bg-center" style={{backgroundImage: "url('/photos/attorneys-hero.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">PHOTO GALLERY</h1>
        </div>
      </section>

      {/* Page Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Presidents Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-orange-500 mb-6">Presidents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <img src="/photos/presidents1.jpg" alt="Meeting with Presidents" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                  <div className="text-center">
                    <img src="/photos/presidents2.jpg" alt="Presidential Events" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                  <div className="text-center">
                    <img src="/photos/presidents3.jpg" alt="Political Events" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                  <div className="text-center">
                    <img src="/photos/presidents4.jpg" alt="Political Meetings" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">FORMER STATE SENATOR BOB ROVNER TOLD BARACK OBAMA HE ENJOYED BEING A DELEGATE IN 2008 AT THE DENVER DEMOCRATIC CONVENTION AND AGAIN IN CHARLOTTE IN 2012</p>
                </div>
              </div>

              {/* United States Senate Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-orange-500 mb-6">United States Senate</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <img src="/photos/senate1.jpg" alt="Senate Meetings" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                  <div className="text-center">
                    <img src="/photos/senate2.jpg" alt="Political Events" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                  <div className="text-center">
                    <img src="/photos/senate3.jpg" alt="Senate Functions" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                  <div className="text-center">
                    <img src="/photos/senate4.jpg" alt="Government Events" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">FORMER STATE SENATOR BOB ROVNER MEETS WITH HIS GOOD FRIENDS PAUL ANKA AND BOBBY RYDELL</p>
                </div>
              </div>

              {/* Celebrities Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-orange-500 mb-6">Celebrities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <img src="/photos/celeb1.jpg" alt="Celebrity Events" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                  <div className="text-center">
                    <img src="/photos/celeb2.jpg" alt="Entertainment Industry" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                  <div className="text-center">
                    <img src="/photos/celeb3.jpg" alt="Celebrity Meetings" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                  <div className="text-center">
                    <img src="/photos/celeb4.jpg" alt="Entertainment Events" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="text-center">
                    <img src="/photos/celeb5.jpg" alt="More Celebrity Events" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                  <div className="text-center">
                    <img src="/photos/celeb6.jpg" alt="Entertainment Figures" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                  <div className="text-center">
                    <img src="/photos/celeb7.jpg" alt="Celebrity Functions" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                  <div className="text-center">
                    <img src="/photos/celeb8.jpg" alt="Entertainment Industry" className="w-full h-48 object-cover rounded mb-2" />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">BOB ROVNER MEETS WITH THE FOUNDING FATHER OF THE STATE OF ISRAEL AND PRIME MINISTER DAVID BEN GURION IN 1971 WHEN HE WAS A YOUNG POLITICAL FIGURE</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Practice Areas Box */}
              <div className="bg-blue-600 text-white p-6 rounded mb-8">
                <h3 className="text-xl font-bold mb-6 text-center">PRACTICE AREAS:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="bg-blue-500 p-2 rounded text-center">Personal Injury</li>
                  <li className="bg-blue-500 p-2 rounded text-center">Auto Accidents</li>
                  <li className="bg-blue-500 p-2 rounded text-center">Motorcycle Accidents</li>
                  <li className="bg-blue-500 p-2 rounded text-center">Truck Accidents</li>
                  <li className="bg-blue-500 p-2 rounded text-center">Premises Liability</li>
                  <li className="bg-blue-500 p-2 rounded text-center">Medical Malpractice</li>
                  <li className="bg-blue-500 p-2 rounded text-center">Defective Products</li>
                  <li className="bg-blue-500 p-2 rounded text-center">Workers' Compensation</li>
                  <li className="bg-blue-500 p-2 rounded text-center">Divorce/ Family Law/ Custody</li>
                  <li className="bg-blue-500 p-2 rounded text-center">Criminal Defense</li>
                  <li className="bg-gray-600 p-2 rounded text-center">Social Security Disability</li>
                  <li className="bg-blue-500 p-2 rounded text-center">General Legal Matters</li>
                </ul>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-100 p-6 rounded">
                <h3 className="text-xl font-bold mb-6 text-center text-blue-600">Contact Us!</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full p-3 border border-gray-300 rounded text-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full p-3 border border-gray-300 rounded text-sm"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone *"
                    className="w-full p-3 border border-gray-300 rounded text-sm"
                    required
                  />
                  <textarea
                    placeholder="Home Address"
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded text-sm"
                  ></textarea>
                  <textarea
                    placeholder="Date of Incident *"
                    rows={2}
                    className="w-full p-3 border border-gray-300 rounded text-sm"
                    required
                  ></textarea>
                  <div className="text-sm">
                    <label className="font-bold mb-2 block">Are you represented by another lawyer for this matter?</label>
                    <div className="space-y-1">
                      <label className="flex items-center">
                        <input type="radio" name="representation" value="no" defaultChecked className="mr-2" />
                        <span>No</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="representation" value="yes" className="mr-2" />
                        <span>Yes</span>
                      </label>
                    </div>
                  </div>
                  <textarea
                    placeholder="Facts of what happened *"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded text-sm"
                    required
                  ></textarea>
                  <div className="text-xs text-gray-600 p-3 bg-gray-50 rounded">
                    The submission of the information contained above in this form is not intended to create an attorney-client relationship.
                  </div>
                  <label className="flex items-start space-x-2 text-xs">
                    <input type="checkbox" required className="mt-1" />
                    <span>*I understand and agree to the above terms</span>
                  </label>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 font-bold"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">NAVIGATION</h4>
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
            <div>
              <h4 className="font-bold mb-4">PRACTICE AREAS</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/practice/personal-injury" className="hover:text-blue-300">Personal Injury</Link></li>
                <li><Link href="/practice/auto-accidents" className="hover:text-blue-300">Automobile Accidents</Link></li>
                <li><Link href="/practice/motorcycle-accidents" className="hover:text-blue-300">Motorcycle Accidents</Link></li>
                <li><Link href="/practice/truck-accidents" className="hover:text-blue-300">Truck Accidents</Link></li>
                <li><Link href="/practice/premises-liability" className="hover:text-blue-300">Premises Liability</Link></li>
                <li><Link href="/practice/medical-malpractice" className="hover:text-blue-300">Medical Malpractice</Link></li>
                <li><Link href="/practice/defective-products" className="hover:text-blue-300">Defective Products</Link></li>
                <li><Link href="/practice/workers-comp" className="hover:text-blue-300">Workers' Compensation</Link></li>
                <li><Link href="/practice/divorce-family-law" className="hover:text-blue-300">Divorce/ Family Law/ Custody</Link></li>
                <li><Link href="/practice/criminal-defense" className="hover:text-blue-300">Criminal Defense</Link></li>
                <li><Link href="/practice/social-security-disability" className="hover:text-blue-300">Social Security Disability</Link></li>
                <li><Link href="/practice/general-legal-matters" className="hover:text-blue-300">General Legal Matters</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">CONTACT US</h4>
              <div className="text-sm space-y-2">
                <p>175 Bustleton Pike<br />Feasterville-Trevose, PA 19053</p>
                <p>215-259-5958</p>
                <p>rovners@dial-law.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>The hiring of a lawyer is an important decision that should not be based solely upon advertisements. <Link href="/disclaimer" className="text-blue-300 underline">Click here to see our disclaimer policies</Link>.</p>
            <p className="mt-2">©1997-2024 by Robert A. Rovner, P.C. All rights reserved. <strong>Created, Maintained and Programmed</strong> by Steven L. Rovner</p>
          </div>
        </div>
      </footer>

      {/* Contact Us Sidebar */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-l-lg shadow-lg z-50 rotate-90 origin-bottom-right">
        <Link href="/contact" className="font-bold text-sm tracking-wider">CONTACT US!</Link>
      </div>
    </div>
  );
} 