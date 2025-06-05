import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, Scale, Car, Heart, Shield, Building2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center py-6 gap-4">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                LAW OFFICES OF
              </h1>
              <h2 className="text-lg lg:text-xl font-semibold text-gray-700 mt-1">
                Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt
              </h2>
            </div>
            <div className="text-center lg:text-right">
              <div className="flex items-center justify-center lg:justify-end mb-4">
                <Phone className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-3xl lg:text-4xl font-bold text-blue-600">215-259-5958</span>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                GET A FREE CONSULTATION!
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center lg:justify-start">
            <ul className="flex space-x-6 py-4 text-sm font-medium overflow-x-auto">
              <li><Link href="/" className="text-blue-300 hover:text-white transition-colors whitespace-nowrap border-b-2 border-blue-300 pb-1">HOME</Link></li>
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
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">RECENT SETTLEMENTS</span>
            <span className="block text-yellow-400">&</span>
            <span className="block">VERDICTS</span>
          </h2>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100">Over 40 Years of Fighting for Our Clients</p>
          <div className="flex items-center justify-center">
            <Scale className="w-8 h-8 text-yellow-400 mr-3" />
            <span className="text-lg font-semibold">Justice. Results. Experience.</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Recent Settlements Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Recent Results</h3>
            <p className="text-lg text-gray-600">We get results for our clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { amount: '$113,500', type: 'LIMITED TORT MOTOR VEHICLE ACCIDENT' },
              { amount: '$50,000', type: 'SEPTA BUS ACCIDENT' },
              { amount: '$185,000', type: 'TRIP AND FALL ACCIDENT' },
              { amount: '$140,000', type: 'VERBAL THRESHOLD MOTOR VEHICLE ACCIDENT' },
              { amount: '$120,000', type: 'FALL ON SLIPPERY FLOOR' }
            ].map((settlement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-3">{settlement.amount}</div>
                  <div className="text-sm font-medium text-gray-600 leading-tight">{settlement.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Practice Areas</h3>
            <p className="text-xl text-gray-600">Comprehensive legal services with proven results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Car className="w-12 h-12" />,
                title: 'AUTO ACCIDENTS',
                description: 'No Fee if No Recovery! If you have been injured in a motor vehicle accident, we can help you understand your legal options and develop a strategy for maximizing compensation.',
                color: 'bg-blue-500'
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'PERSONAL INJURY',
                description: 'Our team of over 15 lawyers plus our paralegals, investigators, experts, all with hundreds of years of combined experience, put us at the top of the legal profession.',
                color: 'bg-red-500'
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'MEDICAL MALPRACTICE',
                description: 'Even well-meaning doctors make mistakes that can have a devastating effect on a patient\'s health. If you or someone you love has been a victim of medical malpractice contact us today.',
                color: 'bg-green-500'
              },
              {
                icon: <Building2 className="w-12 h-12" />,
                title: 'PREMISES LIABILITY',
                description: 'Property owners, landlords and property managers have an obligation to keep their premises safe. If they fail to do so, they may be liable for the damages, losses and injuries they\'ve caused.',
                color: 'bg-purple-500'
              }
            ].map((area, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:border-blue-200 transform hover:-translate-y-3">
                <div className="p-8">
                  <div className={`${area.color} text-white p-4 rounded-xl mb-6 inline-block group-hover:scale-110 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{area.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{area.description}</p>
                  <Link href="/practice" className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg group-hover:scale-105">
                    LEARN MORE
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mb-6 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">Premier Injury Lawyers</h3>
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    For over 40 years, the Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt have been fighting for clients in Philly who have been victims of negligence, auto accidents, personal injury, medical malpractice and premise liability and need an injury lawyer to properly represent them.
                  </p>

                  {[
                    {
                      title: 'Auto Accidents',
                      content: 'When in need of a Philadelphia auto accident lawyer, our injury lawyer team is ready to offer their services in the Philly area. We provide a free initial consultation and do not charge a fee if there is no recovery. We proudly serve Pennsylvania and New Jersey, especially Philadelphia, Bucks County, Montgomery County, Delaware County, Mercer County, Camden County, Atlantic County and Burlington County.'
                    },
                    {
                      title: 'Personal Injury',
                      content: 'Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt has a team of lawyers with proven success in representing injured parties. Whether you have suffered because of a motor vehicle accident, motorcycle accident, due to the condition of a property, medical mistake, or defective product, we will pursue financial compensation for you.'
                    },
                    {
                      title: 'Medical Malpractice',
                      content: 'Most medical workers are responsible professionals who are committed to their patients. However, even well-meaning doctors make mistakes that can have a devastating effect on a patient\'s health. Whether you have suffered harm because of a surgical error, misdiagnosis, drug dispensing error or failure to diagnose cancer, we will pursue financial compensation for you.'
                    },
                    {
                      title: 'Premises Liability',
                      content: 'Property owners, landlords and property managers have an obligation to keep their premises safe. If they fail to do so, they may have been negligent in their duties and may be liable for the damages, losses and injuries they have caused you. We will carefully develop and scrutinize your claim and work hard so you can obtain the compensation you deserve.'
                    }
                  ].map((section, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-600 text-lg mb-3">{section.title}</h4>
                      <p className="text-gray-700">{section.content}</p>
                    </div>
                  ))}

                  <p className="text-lg font-medium text-gray-800">
                    Other areas of law that we focus on are defective products, workers' compensation, divorce, family law, criminal defense, social security disability, real estate and general legal matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Practice Areas Box */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-6 text-center">PRACTICE AREAS</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    'Personal Injury', 'Auto Accidents', 'Motorcycle Accidents', 'Truck Accidents',
                    'Premises Liability', 'Medical Malpractice', 'Defective Products', 'Workers\' Compensation',
                    'Divorce/ Family Law/ Custody', 'Criminal Defense', 'Social Security Disability', 'General Legal Matters'
                  ].map((practice, index) => (
                    <li key={index} className="bg-blue-500 hover:bg-blue-400 p-3 rounded-lg text-center transition-all duration-300 cursor-pointer hover:shadow-lg transform hover:scale-105">
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Contact Us!</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Home Address</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Incident *</label>
                    <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Are you represented by another lawyer for this matter?</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="represented" value="no" className="mr-2 w-4 h-4 text-blue-600" />
                        No
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="represented" value="yes" className="mr-2 w-4 h-4 text-blue-600" />
                        Yes
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Facts of what happened *</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"></textarea>
                  </div>
                  <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <label className="flex items-start">
                      <input type="checkbox" className="mr-3 mt-1 w-4 h-4 text-blue-600" />
                      *I understand and agree that the submission of this form does not create an attorney-client relationship.
                    </label>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    SEND MESSAGE
                  </button>
                </form>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Subscribe to Our Mailing List</h3>
                <form className="space-y-4">
                  <input type="email" placeholder="Email Address *" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg transition-all duration-300 font-medium">
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
        <Link href="/contact" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-12 rounded-l-2xl shadow-2xl font-bold text-sm transition-all duration-300 transform -rotate-90 origin-center hover:scale-105 border-2 border-orange-400">
          CONTACT US!
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Navigation */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-blue-300">Navigation</h4>
              <ul className="space-y-3 text-sm">
                {['Home', 'About', 'Attorneys', 'Locations', 'Photo Gallery', 'In the News', 'Radio Show', 'Contact Us'].map((item, index) => (
                  <li key={index}>
                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-300 transition-colors duration-300 hover:pl-2">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-blue-300">Practice Areas</h4>
              <ul className="space-y-3 text-sm">
                {['Personal Injury', 'Automobile Accidents', 'Motorcycle Accidents', 'Truck Accidents', 'Premises Liability', 'Medical Malpractice', 'Defective Products', 'Workers\' Compensation'].map((item, index) => (
                  <li key={index}>
                    <Link href="/practice" className="hover:text-blue-300 transition-colors duration-300 hover:pl-2">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-blue-300">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p>175 Bustleton Pike</p>
                    <p>Feasterville-Trevose, PA 19053</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <p className="text-xl font-bold text-blue-300">215-259-5958</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <p>rovners@dial-law.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
            <p className="mb-4 text-gray-300">
              The hiring of a lawyer is an important decision that should not be based solely upon advertisements. 
              <Link href="#" className="text-blue-300 hover:text-blue-200 underline ml-1">Click here to see our disclaimer policies.</Link>
            </p>
            <p className="text-gray-400">©1997-2024 by Robert A. Rovner, P.C. All rights reserved. Created, Maintained and Programmed by Steven L. Rovner</p>
            <p className="mt-4 text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto">
              The submission of the information contained above in this form is not intended to create an attorney-client relationship. There will be no representation of the party submitting this above information for any potential legal claim until that party is contacted by a member of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt ("the Firm") and a formal, written contract is signed by that party and an authorized member of the Firm. The Firm will not be liable for any time limitations or representation in any legal matter raised by the use of this internet website.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
