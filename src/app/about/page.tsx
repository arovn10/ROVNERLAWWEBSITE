export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Rovner & Rovner</div>
            <div className="text-right">
              <div className="text-xl font-bold">215-259-5958</div>
              <div className="text-sm">Get a Free Consultation!</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <ul className="flex space-x-8 py-3">
              <li><a href="/" className="hover:text-blue-300">Home</a></li>
              <li><a href="/about" className="hover:text-blue-300 text-blue-300">About Us</a></li>
              <li><a href="/attorneys" className="hover:text-blue-300">Attorneys</a></li>
              <li className="relative group">
                <span className="hover:text-blue-300 cursor-pointer">Practice</span>
              </li>
              <li><a href="/locations" className="hover:text-blue-300">Locations</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">About Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For over 40 years, our law firm has been dedicated to fighting for the rights of injured individuals 
                throughout Pennsylvania and New Jersey. We have built our reputation on achieving exceptional results 
                for our clients while providing compassionate, personalized legal representation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team of experienced attorneys, paralegals, investigators, and experts work together to ensure 
                that every client receives the attention and advocacy they deserve. We understand that dealing with 
                an injury can be overwhelming, which is why we handle every aspect of your case so you can focus 
                on your recovery.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We operate on a contingency fee basis, which means you pay nothing unless we win your case. This 
                commitment demonstrates our confidence in our ability to achieve favorable outcomes for our clients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Our Commitment</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Over 40 years of combined legal experience
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Millions of dollars recovered for our clients
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  No fee unless we win your case
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Free initial consultation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Personalized attention to every case
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Comprehensive legal representation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-blue-300">Home</a></li>
                <li><a href="/about" className="hover:text-blue-300">About</a></li>
                <li><a href="/attorneys" className="hover:text-blue-300">Attorneys</a></li>
                <li><a href="/locations" className="hover:text-blue-300">Locations</a></li>
                <li><a href="/contact" className="hover:text-blue-300">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/practice/personal-injury" className="hover:text-blue-300">Personal Injury</a></li>
                <li><a href="/practice/auto-accidents" className="hover:text-blue-300">Automobile Accidents</a></li>
                <li><a href="/practice/medical-malpractice" className="hover:text-blue-300">Medical Malpractice</a></li>
                <li><a href="/practice/workers-comp" className="hover:text-blue-300">Workers' Compensation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <div className="text-sm space-y-2">
                <p>175 Bustleton Pike<br />Feasterville-Trevose, PA 19053</p>
                <p>215-259-5958</p>
                <p>rovners@dial-law.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>©1997-2024 by Rovner Law. All rights reserved.</p>
            <p className="mt-2 text-xs">
              The hiring of a lawyer is an important decision that should not be based solely upon advertisements.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 