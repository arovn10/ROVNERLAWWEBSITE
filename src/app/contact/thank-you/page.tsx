import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNavShell from '@/components/MobileNavShell';
import { PHONE_TOLLFREE_DISPLAY, TEL_HREF_TOLLFREE } from '@/lib/contact-details';

export default function ContactThankYouPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="hidden lg:block w-full">
        <Header currentPage="contact" />
      </div>
      <div className="block lg:hidden w-full">
        <MobileNavShell />
      </div>

      <main className="flex-1">
        <section className="bg-slate-800 py-14 lg:py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Message received
            </h1>
            <p className="mt-4 text-slate-300 text-lg leading-relaxed">
              Thank you for reaching out. Someone from our office will review what you
              submitted and get back to you.
            </p>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-slate-600 leading-relaxed">
              If your matter is urgent, you don&apos;t have to wait for a callback — call us
              directly and we&apos;ll pick up now.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={TEL_HREF_TOLLFREE}
                className="inline-flex items-center justify-center rounded-md bg-slate-800 px-7 py-3 font-semibold text-white transition-colors hover:bg-slate-700"
              >
                Call {PHONE_TOLLFREE_DISPLAY}
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-7 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-50"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
