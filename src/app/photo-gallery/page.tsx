import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PhotoGalleryPage() {
  return (
    <div>
      <Header currentPage="photo-gallery" />
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
      <Footer />
    </div>
  );
} 