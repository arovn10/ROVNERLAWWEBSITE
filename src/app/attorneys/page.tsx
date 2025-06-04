

import Link from 'next/link';

export default function AttorneysPage() {
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
              <li><Link href="/attorneys" className="hover:text-blue-300 text-blue-300">ATTORNEYS</Link></li>
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

      {/* Hero Image with Page Title */}
      <section className="relative py-24 bg-cover bg-center" style={{backgroundImage: "url('/photos/attorneys-hero.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">ATTORNEYS</h1>
        </div>
      </section>

      {/* Page Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Personal Injury Attorney | Personal Injury Lawyers</h2>
                <div className="w-24 h-1 bg-blue-500 mb-6"></div>
              </div>

              {/* Our Attorneys List */}
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Our Attorneys:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <ul className="space-y-1">
                    <li><strong>Robert A. Rovner (1943 – 2021)</strong></li>
                    <li><strong>Steven L. Rovner</strong></li>
                    <li><strong>Bruce S. Allen</strong></li>
                    <li><strong>Howard P. Rovner</strong></li>
                    <li><strong>Jeffrey I. Zimmerman</strong></li>
                    <li><strong>Jeffrey Allen Sigman</strong></li>
                  </ul>
                  <ul className="space-y-1">
                    <li><strong>Cheryl B. Wolf</strong></li>
                    <li><strong>Robin Scolnick</strong></li>
                    <li><strong>Jeffrey D. Schmidt</strong></li>
                    <li><strong>David K. String</strong></li>
                    <li><strong>Matthew A. Fleishman</strong></li>
                    <li><strong>Joseph S. Lukomski</strong></li>
                  </ul>
                </div>
              </div>

              {/* Attorney Profiles */}
              <div className="space-y-12">
                {/* Robert A. Rovner */}
                <div id="robert-rovner">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">ROBERT A. ROVNER (1943-2021)</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/photos/rrovner.jpg" alt="Robert A. Rovner" className="w-48 h-60 object-cover rounded" />
                    <div className="flex-1 space-y-4 text-gray-700">
                      <p>Senator Robert A. Rovner founded and served as Senior Partner in the Law Firm of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt from 1980 until 2021.</p>
                      <p>In 1970, He was elected the youngest State Senator in Pennsylvania history representing Northeast Philadelphia and Bucks County. He was elected as Delegate to the Presidential National Conventions in 1972, 1976 and 1988.</p>
                      <p>He was President of all his classes at Temple University Law School and Temple Undergraduate School, and worked as an Assistant District Attorney under Arlen Specter. He was called a hardworking and effective State Senator, and recognized as a civic leader and a man with a strong involvement in local charities. He also served as Southeast Pennsylvania's Regional Campaign Chair for Israel Bonds and also ran as a candidate to the U.S. Senate in 2000.</p>
                      <p>Rovner is survived by his two sons: Steven, who graduated from the University of Pennsylvania and the University of Miami School of Law and now heads the law firm; and, Danny, who graduated from Temple University School of Law, and also works as an attorney.</p>
                      <p>Rovner hosted a talk show every Friday in the Philadelphia area on WWDB 860 AM called <Link href="#" className="text-blue-600 underline">"Senator Bob Rovner Talks to the Stars"</Link>.</p>
                      <p>Rovner served many years on the Board of Trustees of Temple University and has served as the President of The Northeast High School Alumni Association.</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="#top" className="text-blue-600 underline">Top</Link>
                  </div>
                </div>

                {/* Steven L. Rovner */}
                <div id="steven-rovner">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">STEVEN L. ROVNER</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/photos/srovner.jpg" alt="Steven L. Rovner" className="w-48 h-60 object-cover rounded" />
                    <div className="flex-1 space-y-4 text-gray-700">
                      <p>Steven is the principal and managing attorney of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt. He was born in Philadelphia and a graduate of Lower Moreland High School (1985), The University of Pennsylvania (1989) and The University of Miami School of Law (1992), Steven has developed a notable reputation in Pennsylvania and other jurisdictions as a tough and determined litigator of personal injury type cases. He is regularly in the courtroom fighting for the rights of his injured clients; often doing battle against well known insurance companies. With experience as a lawyer for over 19 years, he has personally won and collected verdicts and settlements for his clients in excess of $50,000,000. He has appeared on Good Morning America, CNN, The Fox News Channel, ABC, CBS, NBC, and Fox.</p>
                      <p>Steven is admitted to practice law in Pennsylvania, New Jersey, and Florida. He is licensed and admitted by The Supreme Court of Pennsylvania, The Supreme Court of New Jersey, The Supreme Court of Florida, The United States District Court for the Eastern District of Pennsylvania, The United States District Court for the Middle District of Pennsylvania, and The United States District Court for New Jersey. Professionally, he is a member of the Pennsylvania Bar Association (PBA), the Florida Bar Association (FBA) and the Pennsylvania Association for Justice (formerly The Pennsylvania Trial Lawyers Association).</p>
                      <p>Steven and his firm regularly practice in the areas of: Civil litigation, personal injury, employment law, social security disability, real estate, landlord tenant matters, criminal defense, domestic/family matters, criminal defense, medical malpractice, products liability, corporate, and general law. Steven is active in local politics in his home town of Northampton Township, Bucks County, Pennsylvania where he resides.</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="#top" className="text-blue-600 underline">Top</Link>
                  </div>
                </div>

                {/* Bruce S. Allen */}
                <div id="bruce-allen">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">BRUCE S. ALLEN</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/photos/bruce_s.jpg" alt="Bruce S. Allen" className="w-48 h-60 object-cover rounded" />
                    <div className="flex-1 space-y-4 text-gray-700">
                      <p>Bruce S. Allen Juris Doctor degree (May 1976) from Delaware Law School of Widener University; Bachelor of Science degree (May 1973) from Philadelphia University (Senior Class President); Chairman and President of CompuScan Technologies, Inc. (1993-1999); Founder and Chairman of CompuScan Marketing, Inc. (1989-1999 and President 1989-1992); Officer and Director of RealTIME Media, Inc. (1994-1999); Partner in Law Offices of Rovner, Allen, Rovner, Zimmerman, Signman and Schmidt, Feasterville, PA (1979-Present). Admitted to practice law in Pennsylvania, Federal District Court for the Eastern District of Pennsylvania and before the United States Supreme Court.</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="#top" className="text-blue-600 underline">Top</Link>
                  </div>
                </div>

                {/* Howard P. Rovner */}
                <div id="howard-rovner">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">HOWARD P. ROVNER</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/photos/hrovner.jpg" alt="Howard P. Rovner" className="w-48 h-60 object-cover rounded" />
                    <div className="flex-1 space-y-4 text-gray-700">
                      <p>NE High School l972 Graduated Temple University l976 – BBA-Business Administration – Major in Business Law and Industrial Relations Delaware Law School of Widener University January l980 – Juris Doctor.</p>
                      <p>Worked as an International Organizer for Hotel, Restaurant and Bartenders Union (l976-l979) while attending law school in the evenings. Previously worked as a waiter, busboy, cashier-department store, fast food counter services, sold programs at Atlantic City Ice Capades, boardwalk Arcade. Served as Temple University School of Business Administration, Secretary and later President of Business School College Council and served as a Student Senator while attending Temple University.</p>
                      <p>Current Democratic Candidate for PA State Senate 12th District (Part of Montgomery and Bucks County) 2002</p>
                      <p>Married (l977) Sharon (nee: Jacobs) and has three (3) children: Seth (l982), Brent (l984) and Heather (l987).</p>
                      <p><strong>Community Activities:</strong> President Cardozo Lodge 400 (l987-l988&l996-l997); National Treasurer Brith Sholom l988-l990; Brith Sholom National Vice-President l990-1996; Executive Vice-President National Brith Sholom Society l996-1998; President National Brith Sholom 1998-2000; Vice-President Shaare Shamayin-Beth Judah; President NE High School Alumni Association (2001-2003); Member Philadelphia Boosters Club; Board of Directors Cardozo Lodge Federal Credit Union; Coach of Baseball and Basketball for Huntingdon Valley. Guest Host Radio Show – Senator Bob Rovner talks to the Stars- 1540 AM; Guest on several radio shows on WNWR and WBCB, discussing workers' compensation, family law and politics.</p>
                      <p>Practice of Law since l980 with main office at l75 Bustleton Pike, Feasterville, PA. Admitted to Supreme Court of Pennsylvania 1980, United States District Court for the Eastern District of Pennsylvania 1982. Represent clients in many areas of law, with primary practice in Workers' Compensation, in which I represent injured workers in work-related accidents, and Domestic Relations or Family Law, including divorce, support, custody, and adoptions. I enjoy helping people and always try to negotiate the best and highest resolution for my client, in all areas of my practice.</p>
                      <p><strong>Hobbies:</strong> Tennis; bicycle riding, walking, movies, theater, basketball (76ers) and spending time with my family.</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="#top" className="text-blue-600 underline">Top</Link>
                  </div>
                </div>

                {/* Jeffrey I. Zimmerman */}
                <div id="jeffrey-zimmerman">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">JEFFREY I. ZIMMERMAN</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/photos/jzimmerman2.jpg" alt="Jeffrey I. Zimmerman" className="w-48 h-60 object-cover rounded" />
                    <div className="flex-1 space-y-4 text-gray-700">
                      <p>Jeffrey I. Zimmerman is the firm's senior litigation partner, bringing his over 35 years of experience to the position. He is a 1979 graduate of the Dickinson School of Law and a graduate of the American Trial Lawyers Association National College of Advocacy. He served as a judicial clerk to William J. Lederer, in the Philadelphia Court of Common Pleas. A Philadelphia native, he graduated Central High School in 1972 and graduated LaSalle University in 1976, where he was a member of the St. Thomas More Law Society.</p>
                      <p>Mr. Zimmerman has concentrated his practice in personal injury litigation for his entire career, with special expertise in major injury and death claims, motor vehicle and premises [fall down] cases, as well as work place injuries, nursing home negligence and motorcycle and truck cases. He has personally handled thousands of personal injury cases, winning settlements, verdicts and awards amounting to tens of millions of dollars in recoveries.</p>
                      <p>Mr. Zimmerman is well qualified to handle the more complex cases, having gained in-depth experience with safety design, architecture, engineering, construction, accident reconstruction and medical issues. He has gained recoveries on several cases in excess of $1,000,000 each.</p>
                      <p>Mr. Zimmerman is a member in good standing of the Pennsylvania Bar, the Eastern Federal District of Pennsylvania and the Federal Third Circuit Court of Appeals. Mr. Zimmerman has several published appellate decisions, making law in Pennsylvania. He has published articles in professional journals, text books and various publications. He has presented talks on many legal topics to interested groups, including the Knights of Columbus, the Philadelphia Dental Society and golden age groups.</p>
                      <p>He is active in several charities and is a Mason. He volunteers his time for public speaking engagements to educate the community on their legal rights and is available to speak to your group. He is a published writer and has written a number of professional and literary works.</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="#top" className="text-blue-600 underline">Top</Link>
                  </div>
                </div>

                {/* Jeffrey Allen Sigman */}
                <div id="jeffrey-sigman">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">JEFFREY ALLEN SIGMAN</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/photos/jsigman.jpg" alt="Jeffrey Allen Sigman" className="w-48 h-60 object-cover rounded" />
                    <div className="flex-1 space-y-4 text-gray-700">
                      <p>Temple University (BA) 1983; Temple University School of Law (JD) 1986. Admitted to practice by the Supreme Court of Pennsylvania 1986 and the United States District Court for the Eastern District of Pennsylvania 1989. Member of the Pennsylvania Association of Criminal Defense Lawyers, Philadelphia Trial Lawyers Association, Pennsylvania Trial Lawyers Association, Philadelphia Bar Association and The Association of Trial Lawyers of America. Practice in the areas of civil litigation, personal injury and criminal defense. Jeff resides in Bucks County.</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="#top" className="text-blue-600 underline">Top</Link>
                  </div>
                </div>

                {/* Joseph S. Lukomski */}
                <div id="joseph-lukomski">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">JOSEPH S. LUKOMSKI</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/photos/headshot.jpg" alt="Joseph S. Lukomski" className="w-48 h-60 object-cover rounded" />
                    <div className="flex-1 space-y-4 text-gray-700">
                      <p>Josephs S. Lukomski was born and raised in Haddon Heights, New Jersey, graduating from Haddon Heights High School in 1969. He earned his undergraduate degree (B.A. English) in 1973 from Rutgers University, New Brunswick, New Jersey, and his law degree from Temple University in 1978. He served a one-year judicial clerkship in the Superior Court of New Jersey clerking for The Honorable Nathan Staller and The Honorable James O'Neill, in Cape May County.</p>
                      <p>Mr. Lukomski then practiced law with a mid-sized law firm in Atlantic City, New Jersey, before moving to Nashville, Tennessee, where he became a member of the Tennessee bar (1981) and practiced law there from 1981 to 1988. He and his family returned to Pennsylvania in 1988, and he has practiced law in the state and federal courts of Pennsylvania and New Jersey since that time. Mr. Lukomski concentrates his practice in general civil litigation with an emphasis on personal injury law, including automobile accidents, premises liability, medical malpractice, products liability, and commercial matters. In his spare time, Mr. Lukomski enjoys spending time with his seven grandchildren, coaching softball and baseball, and following the Philadelphia sports teams.</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="#top" className="text-blue-600 underline">Top</Link>
                  </div>
                </div>

                {/* Cheryl B. Wolf */}
                <div id="cheryl-wolf">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">CHERYL B. WOLF</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/photos/cwolf.jpg" alt="Cheryl B. Wolf" className="w-48 h-60 object-cover rounded" />
                    <div className="flex-1 space-y-4 text-gray-700">
                      <p>LaSalle University (BA) 1983;</p>
                      <p>American University-Washington College of Law (JD) 1986.</p>
                      <p>Member American Bar Association. Admitted to practice by: Supreme Court of Pennsylvania-1986; Supreme Court of New Jersey-1987; United States District Court for the Eastern District of Pennsylvania-1988; United States District Court for the District of New Jersey-1987. Practice in the areas of civil litigation, personal injury, landlord-tenant, contract and business litigation.</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="#top" className="text-blue-600 underline">Top</Link>
                  </div>
                </div>

                {/* Robin Scolnick */}
                <div id="robin-scolnick">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">ROBIN SCOLNICK</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/photos/rscolnick.jpg" alt="Robin Scolnick" className="w-48 h-60 object-cover rounded" />
                    <div className="flex-1 space-y-4 text-gray-700">
                      <p>Ms. Scolnick received her Juris Doctor from Widener University School of Law in 1997 and her B.A. in elementary education from Rider University (College) in 1975.</p>
                      <p>She is a member of the Pennsylvania Bar and the New Jersey Bar specializing in Family Law. Ms. Scolnick is the proud mother of Jonathan, a 2000 University of Illinois graduate currently living and working in Manhattan, NY area, and Sean, a college student studying music in New York.</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="#top" className="text-blue-600 underline">Top</Link>
                  </div>
                </div>

                {/* Jeffrey D. Schmidt */}
                <div id="jeffrey-schmidt">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">JEFFREY D. SCHMIDT</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/photos/jschmidt.jpg" alt="Jeffrey D. Schmidt" className="w-48 h-60 object-cover rounded" />
                    <div className="flex-1 space-y-4 text-gray-700">
                      <p>Jeff Schmidt is a Philadelphia native all the way to his core. He was born and raised in the Northeast part of the city and graduated from George Washington High School in 1994. Following high school, he went to Temple University, earning a degree in Accounting and Business Administration in 1998.</p>
                      <p>After working in the accounting industry for two years, Jeff pursued his life-long dream to become an attorney and graduated from Temple University's Beasley School of Law with a Juris Doctorate and the Fox School of Business with a Masters in Business Administration in 2003. It was during his law school years that Jeff wrote and had articles published in the International and Comparative Law Review Journal and worked as a law clerk at the Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman and Schmidt.</p>
                      <p>Jeff joined the law firm of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt as an associate in 2003. Jeff handles a wide variety of personal injury matters, which include motor vehicle accidents, premises liability, dram shop liability, construction site accidents, trucking accidents, products liability, nursing home malpractice, business transactions, small business litigation, contract drafting and litigation, wills, real estate, and ethical defense. He concentrates his practice in handling complex cases involving all types of injuries, including major, life-changing and catastrophic injuries and takes pride in his hard work and the successful outcomes which he achieves for all of his clients.</p>
                      <p>Jeff currently lives in Elkins Park with his wife of 7 years. He has diverse interests, which include being a sports fan, running several fantasy football leagues, fitness and traveling, being an avid reader and going to the movies.</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="#top" className="text-blue-600 underline">Top</Link>
                  </div>
                </div>

                {/* David K. String */}
                <div id="david-string">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">DAVID K. STRING</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/photos/headshot2.jpg" alt="David K. String" className="w-48 h-60 object-cover rounded" />
                    <div className="flex-1 space-y-4 text-gray-700">
                      <p>David K. String is a personal injury litigator representing seriously injured victims of negligence, from car accidents to slip to fall accidents. David also handles landlord and tenant matters, traffic citations, contract drafting, contract review, and breach of contract litigation. He is a life-long resident of Feasterville and works hard to represent and serve his clients.</p>
                      <p>David received his Bachelors of Business Administration, cum laude, from Temple University's Fox School of Business, a full year early, in 2011 and his J.D. from the Valparaiso University Law School, magna cum laude, in 2014. While in law school, he was the Executive Managing Editor of the Valparaiso University Law Review and a member of the trial advocacy team, competing in multiple national trial advocacy competitions.</p>
                      <p>While in law school, David worked as a law clerk at the Law Offices of Rovner, Allen, Rovner, Zimmerman, Sigman & Schmidt. While he worked as an intern at the Pennsylvania Office of the Attorney General's Bureau of Consumer Protection, he also gained experience investigating businesses defrauding consumers by violating the Pennsylvania Unfair Trade Practices and Consumer Protection Law. Additionally, he worked as a judicial intern for a federal trial court judge and a state trial court judge.</p>
                      <p>He is admitted to practice law in Pennsylvania and New Jersey and to appear before the United States District Courts for the Eastern District of Pennsylvania and the District of New Jersey.</p>
                      <p><strong>Publication:</strong> A Fracking Good Solution to the Hydraulic Fracturing Regulation Conundrum, 48 Val. U.L. Rev. 417 (2013)—winner of the 2013 Valparaiso University Law Review Scribes' Award</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="#top" className="text-blue-600 underline">Top</Link>
                  </div>
                </div>

                {/* Matthew A. Fleishman */}
                <div id="matthew-fleishman">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">MATTHEW A. FLEISHMAN</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src="/photos/headshot3.jpg" alt="Matthew A. Fleishman" className="w-48 h-60 object-cover rounded" />
                    <div className="flex-1 space-y-4 text-gray-700">
                      <p>Matthew A. Fleishman is a lifelong resident of Bucks County, Pa., graduating from Bensalem High School. Matthew has an undergraduate degree from the University of Maryland, College Park, along with a Juris Doctor from Temple University in 2013. Matthew is licensed to practice law in both Pennsylvania and New Jersey, handling mostly personal injury cases, but working on criminal, domestic, landlord/tenant and worker's compensation matters, as well.</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="#top" className="text-blue-600 underline">Top</Link>
                  </div>
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