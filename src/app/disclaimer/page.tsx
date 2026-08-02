import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DisclaimerClient from './DisclaimerClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // No "| Rovner Law" here — the root layout's title template appends the brand,
  // so including it produced "Disclaimer | Rovner Law | Rovner Law".
  title: 'Disclaimer & Legal Policies',
  description: 'Legal disclaimer, past-results notice and site policies for the Law Offices of Rovner, Allen, Rovner & Sigman.',
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="hidden lg:block">
        <Header currentPage="" />
      </div>
      <div className="block lg:hidden w-full">
        <DisclaimerClient />
      </div>
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="text-orange-600 hover:text-orange-700 font-medium mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Disclaimer & Legal Policies</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
          <p>
            The hiring of a lawyer is an important decision that should not be based solely upon advertisements. 
            Before you decide, ask us to send you free written information about our qualifications and experience.
          </p>
          <p>
            The information contained on this website is provided for general informational purposes only and 
            does not constitute legal advice. No attorney-client relationship is created by your use of this 
            website or by sending any information through this website.
          </p>
          <p>
            The submission of information through the contact form on this website is not intended to create 
            an attorney-client relationship. There will be no representation of any party submitting such 
            information until that party is contacted by a member of our firm and a formal, written retainer 
            agreement is signed.
          </p>
          <p>
            We will not be liable for any time limitations or deadlines that may affect your legal rights 
            as a result of using this website or any delay in our response to your inquiry.
          </p>
          <p>
            Past results do not guarantee a similar outcome. Each case is unique and must be evaluated 
            on its own merits.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
