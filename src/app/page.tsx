import Link from 'next/link';

export default function HomePage() {
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
              <li><Link href="/in-the-news" className="hover:text-blue-300">IN THE NEWS</Link></li>
              <li><Link href="/radio-show" className="hover:text-blue-300">RADIO SHOW</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Recent Settlements Section */}
      <section className="py-8 bg-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-6">RECENT SETTLEMENTS & VERDICTS</h2>
          <div className="flex justify-center space-x-8 overflow-x-auto">
            <div className="text-center min-w-[200px]">
              <div className="text-3xl font-bold text-blue-400">$113,500</div>
              <div className="text-sm">LIMITED TORT MOTOR VEHICLE ACCIDENT</div>
            </div>
            <div className="text-center min-w-[200px]">
              <div className="text-3xl font-bold text-blue-400">$50,000</div>
              <div className="text-sm">SEPTA BUS ACCIDENT</div>
            </div>
            <div className="text-center min-w-[200px]">
              <div className="text-3xl font-bold text-blue-400">$185,000</div>
              <div className="text-sm">TRIP AND FALL ACCIDENT</div>
            </div>
            <div className="text-center min-w-[200px]">
              <div className="text-3xl font-bold text-blue-400">$140,000</div>
              <div className="text-sm">VERBAL THRESHOLD MOTOR VEHICLE ACCIDENT</div>
            </div>
            <div className="text-center min-w-[200px]">
              <div className="text-3xl font-bold text-blue-400">$120,000</div>
              <div className="text-sm">FALL ON SLIPPERY FLOOR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Auto Accidents */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">AUTO ACCIDENTS</h3>
              <img src="/api/placeholder/300/200" alt="Auto Accident" className="w-full h-48 object-cover mb-4 rounded" />
              <p className="text-gray-600 mb-4 text-sm">
                No Fee if No Recovery! If you have been injured in a motor vehicle accident, we can help you understand your legal options and develop a strategy for maximizing compensation.
              </p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 font-bold text-sm">
                LEARN MORE &gt;
              </button>
            </div>

            {/* Personal Injury */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">PERSONAL INJURY</h3>
              <img src="/api/placeholder/300/200" alt="Personal Injury" className="w-full h-48 object-cover mb-4 rounded" />
              <p className="text-gray-600 mb-4 text-sm">
                Our team of over 15 lawyers plus our paralegals, investigators, experts, all with hundreds of years of combined experience, put us at the top of the legal profession.
              </p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 font-bold text-sm">
                LEARN MORE &gt;
              </button>
            </div>

            {/* Medical Malpractice */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">MEDICAL MALPRACTICE</h3>
              <img src="/api/placeholder/300/200" alt="Medical Malpractice" className="w-full h-48 object-cover mb-4 rounded" />
              <p className="text-gray-600 mb-4 text-sm">
                Even well-meaning doctors make mistakes that can have a devastating effect on a patient's health. If you or someone you love has been a victim of medical malpractice contact us today.
              </p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 font-bold text-sm">
                LEARN MORE &gt;
              </button>
            </div>

            {/* Premises Liability */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">PREMISES LIABILITY</h3>
              <img src="/api/placeholder/300/200" alt="Premises Liability" className="w-full h-48 object-cover mb-4 rounded" />
              <p className="text-gray-600 mb-4 text-sm">
                Property owners, landlords and property managers have an obligation to keep their premises safe. If they fail to do so, they may be liable for the damages, losses and injuries they've caused.
              </p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 font-bold text-sm">
                LEARN MORE &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h2>
                <div className="w-24 h-1 bg-blue-500 mb-6"></div>
                <h3 className="text-xl font-bold text-gray-700 mb-6">Premier Injury Lawyers</h3>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  For over 40 years, the Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt have been fighting for clients in Philly who have been victims of negligence, auto accidents, personal injury, medical malpractice and premise liability and need an injury lawyer to properly represent them.
                </p>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Auto Accidents</h4>
                  <p>
                    When in need of a <Link href="#" className="text-blue-600 underline">Philadelphia auto accident lawyer</Link>, our injury lawyer team is ready to offer their services in the Philly area. We provide a free initial consultation and do not charge a fee if there is no recovery. We proudly serve Pennsylvania and New Jersey, especially Philadelphia, Bucks County, Montgomery County, Delaware County, Mercer County, Camden County, Atlantic County and Burlington County.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Personal Injury</h4>
                  <p>
                    Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt has a team of lawyers with proven success in representing injured parties. Whether you have suffered because of a motor vehicle accident, motorcycle accident, due to the condition of a property, medical mistake, or defective product, we will pursue financial compensation for you. With dedicated professionalism and personal attention, hiring a <Link href="#" className="text-blue-600 underline">personal injury attorney from our firm in Bucks County</Link> will help you receive the best settlement for your injury.
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
                    Property owners, landlords and property managers have an obligation to keep their premises safe. If they to do so, they may have been negligent in their duties and may be liable for the damages, losses and injuries they have caused you. We will carefully develop and scrutinize your claim and work hard so you can obtain the compensation you deserve.
                  </p>
                </div>

                <p>
                  Other areas of law that we focus on are defective products, workers' compensation, divorce, family law, criminal defense, social security disability, real estate and general legal matters.
                </p>

                <p>
                  Those in need of an injury lawyer in Pennsylvania and New Jersey, specifically Philadelphia, Bucks County, Montgomery County and Camden can turn to us for the representation they deserve. Whether you need a <Link href="#" className="text-blue-600 underline">divorce attorney</Link> in Bucks County or live in <Link href="#" className="text-blue-600 underline">Montgomery County and need a slip and fall lawyer</Link>, we will be glad to help you.
                </p>
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
              <div className="bg-gray-100 p-6 rounded mb-8">
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
                    The submission of the information contained above in this form is not intended to create an attorney-client relationship. There will be no representation of the party submitting this above information for any potential legal claim until that party is contacted by a member of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt ("the Firm") and a formal, written contract is signed by that party and an authorized member of the Firm.
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

              {/* YouTube Video */}
              <div className="mb-8">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/KIk_uZ_Jyg0?si=33lyrZ_TxX1cxrPE" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded"
                ></iframe>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gray-100 p-6 rounded">
                <h3 className="text-xl font-bold mb-6 text-center">Subscribe to Our Mailing List</h3>
                <form className="space-y-4">
                  <div className="text-sm text-gray-600 mb-4">* indicates required</div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Email Address *</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">First Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-bold text-sm"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-8">AS FEATURED ON:</h2>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            <img src="/api/placeholder/120/60" alt="CNN" className="h-12" />
            <img src="/api/placeholder/120/60" alt="Good Morning America" className="h-12" />
            <img src="/api/placeholder/120/60" alt="Fox News" className="h-12" />
            <img src="/api/placeholder/120/60" alt="CBS" className="h-12" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="bg-gray-100 p-8 rounded-lg max-w-4xl mx-auto">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "My lawyer at the Rovner Firm did a great job representing me. She was very accessible and easy to reach when I had questions and/or concerns. She was also very thorough and committed to me and my case. I would highly recommend their services!"
              </blockquote>
              <div className="flex justify-center mb-2">
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <cite className="font-bold text-gray-900">VERA</cite>
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
            <div className="mt-4 text-xs">
              The submission of the information contained above in this form is not intended to create an attorney-client relationship. There will be no representation of the party submitting this above information for any potential legal claim until that party is contacted by a member of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt ("the Firm") and a formal, written contract is signed by that party and an authorized member of the Firm. The Firm will not be liable for any time limitations or representation in any legal matter raised by the use of this internet website.
            </div>
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
