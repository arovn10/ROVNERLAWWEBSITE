import Link from 'next/link';

export default function InTheNewsPage() {
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
              <li><Link href="/photo-gallery" className="hover:text-blue-300">PHOTO GALLERY</Link></li>
              <li><Link href="/in-the-news" className="hover:text-blue-300 text-blue-300">IN THE NEWS</Link></li>
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
          <h1 className="text-5xl font-bold text-white mb-4">IN THE NEWS</h1>
        </div>
      </section>

      {/* Page Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Recent News Coverage</h2>
                <div className="w-24 h-1 bg-blue-500 mb-6"></div>
              </div>

              <div className="space-y-8">
                {/* News Article 1 */}
                <article className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">Settlement Reached in Major Auto Accident Case</h3>
                  <div className="text-sm text-gray-500 mb-4">Published: December 15, 2023</div>
                  <div className="prose max-w-none text-gray-700">
                    <p>The Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt announced today that they have reached a significant settlement on behalf of their client who was severely injured in a multi-vehicle accident on I-95. The settlement amount, while confidential, provides substantial compensation for medical expenses, lost wages, and pain and suffering.</p>
                    <p>"This settlement demonstrates our commitment to fighting for the rights of injured victims," said Steven L. Rovner, managing partner of the firm. "Our client can now focus on their recovery knowing that their financial future is secure."</p>
                    <p>The accident occurred when the defendant driver failed to maintain control of their vehicle during adverse weather conditions, resulting in a chain-reaction collision involving multiple vehicles.</p>
                  </div>
                </article>

                {/* News Article 2 */}
                <article className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">Firm Recognized for Outstanding Community Service</h3>
                  <div className="text-sm text-gray-500 mb-4">Published: November 8, 2023</div>
                  <div className="prose max-w-none text-gray-700">
                    <p>The Philadelphia Bar Association has recognized the Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt for their outstanding pro bono work and community service. The firm has provided free legal services to over 150 families in need throughout the past year.</p>
                    <p>"Giving back to our community is not just a responsibility, it's a privilege," said Howard P. Rovner. "We are honored to be able to help those who might not otherwise have access to quality legal representation."</p>
                    <p>The firm's community service initiatives include free legal clinics, educational seminars on legal rights, and partnerships with local charities.</p>
                  </div>
                </article>

                {/* News Article 3 */}
                <article className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">Record Verdict in Medical Malpractice Case</h3>
                  <div className="text-sm text-gray-500 mb-4">Published: October 22, 2023</div>
                  <div className="prose max-w-none text-gray-700">
                    <p>A Philadelphia jury awarded $2.4 million to a client represented by Jeffrey I. Zimmerman in a medical malpractice case involving a misdiagnosis that led to delayed treatment and permanent injury. The verdict represents one of the largest medical malpractice awards in the region this year.</p>
                    <p>"This case highlights the importance of accurate diagnosis and timely treatment," said Zimmerman. "Medical professionals must be held accountable when their negligence causes harm to patients."</p>
                    <p>The case involved a 45-year-old construction worker whose condition was misdiagnosed for over six months, resulting in permanent disability and loss of income.</p>
                  </div>
                </article>

                {/* News Article 4 */}
                <article className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">Firm Celebrates 40th Anniversary</h3>
                  <div className="text-sm text-gray-500 mb-4">Published: September 5, 2023</div>
                  <div className="prose max-w-none text-gray-700">
                    <p>The Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt marked their 40th anniversary with a celebration attended by clients, colleagues, and community leaders. Founded in 1983 by the late Robert A. Rovner, the firm has grown from a small practice to one of the region's premier personal injury law firms.</p>
                    <p>"My father would be proud to see how the firm has grown while maintaining its commitment to excellence and client service," said Steven L. Rovner. "We look forward to serving our community for many years to come."</p>
                    <p>Over four decades, the firm has recovered over $100 million in settlements and verdicts for their clients.</p>
                  </div>
                </article>

                {/* News Article 5 */}
                <article className="pb-8">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">Scholarship Program Launched for Local Students</h3>
                  <div className="text-sm text-gray-500 mb-4">Published: August 18, 2023</div>
                  <div className="prose max-w-none text-gray-700">
                    <p>The firm announced the launch of the Robert A. Rovner Memorial Scholarship Program, which will provide financial assistance to local students pursuing legal education. The scholarship honors the memory of the firm's founder and his commitment to education and public service.</p>
                    <p>"Education was one of my father's greatest passions," said Steven L. Rovner. "This scholarship program will help ensure that financial barriers don't prevent deserving students from pursuing their dreams of becoming lawyers."</p>
                    <p>The scholarship will award $5,000 annually to qualifying students attending law school in Pennsylvania or New Jersey.</p>
                  </div>
                </article>
              </div>

              {/* Admin Link */}
              <div className="mt-12 p-6 bg-gray-100 rounded">
                <h3 className="text-lg font-bold mb-4">Admin Access</h3>
                <p className="text-sm text-gray-600 mb-4">Authorized personnel can edit news articles and manage content.</p>
                <Link 
                  href="/admin/news" 
                  className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-bold"
                >
                  MANAGE NEWS CONTENT
                </Link>
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

              {/* Recent News Box */}
              <div className="bg-gray-100 p-6 rounded mb-8">
                <h3 className="text-xl font-bold mb-6 text-center">RECENT UPDATES</h3>
                <ul className="space-y-3 text-sm">
                  <li className="border-b border-gray-300 pb-2">
                    <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Major Settlement Announced</Link>
                    <div className="text-xs text-gray-500">Dec 15, 2023</div>
                  </li>
                  <li className="border-b border-gray-300 pb-2">
                    <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Community Service Recognition</Link>
                    <div className="text-xs text-gray-500">Nov 8, 2023</div>
                  </li>
                  <li className="border-b border-gray-300 pb-2">
                    <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Record Medical Malpractice Verdict</Link>
                    <div className="text-xs text-gray-500">Oct 22, 2023</div>
                  </li>
                  <li className="border-b border-gray-300 pb-2">
                    <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold">40th Anniversary Celebration</Link>
                    <div className="text-xs text-gray-500">Sep 5, 2023</div>
                  </li>
                  <li className="pb-2">
                    <Link href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Scholarship Program Launch</Link>
                    <div className="text-xs text-gray-500">Aug 18, 2023</div>
                  </li>
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