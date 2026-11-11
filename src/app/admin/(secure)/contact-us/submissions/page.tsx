import Link from 'next/link';
import { ArrowLeft, Inbox, Mail, Phone, Calendar } from 'lucide-react';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

function truncate(text: string, max = 80) {
  if (!text) return '';
  return text.length > max ? text.slice(0, max).trim() + '…' : text;
}

function formatDate(d: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(d);
}

export default async function ContactSubmissionsPage() {
  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/admin/contact-us"
          className="inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Contact Us
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg">
          <Inbox className="h-5 w-5" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Contact Submissions
        </h1>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Every entry submitted through the public contact form, newest first.
      </p>

      {submissions.length === 0 ? (
        <div className="bg-white/70 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-10 text-center text-gray-500">
          No submissions yet.
        </div>
      ) : (
        <div className="bg-white/70 backdrop-blur rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-50 to-blue-100/60 border-b border-gray-200">
              <tr className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <th className="px-4 py-3">Received</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Case Type</th>
                <th className="px-4 py-3">Facts</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s) => (
                <tr
                  key={s.id}
                  className="border-b border-gray-100 last:border-0 hover:bg-blue-50/40 transition-colors"
                >
                  <td className="px-4 py-3 align-top">
                    <Link
                      href={`/admin/contact-us/submissions/${s.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-blue-700"
                    >
                      <Calendar className="h-3.5 w-3.5 text-gray-400" />
                      {formatDate(s.createdAt)}
                    </Link>
                  </td>
                  <td className="px-4 py-3 align-top text-sm text-gray-900 font-medium">
                    {s.name}
                  </td>
                  <td className="px-4 py-3 align-top text-sm text-gray-700">
                    <span className="inline-flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-gray-400" />
                      {s.email}
                    </span>
                  </td>
                  <td className="px-4 py-3 align-top text-sm text-gray-700">
                    {s.phone ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-gray-400" />
                        {s.phone}
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 align-top text-sm text-gray-700">
                    {s.caseType || <span className="text-gray-400">—</span>}
                  </td>
                  <td className="px-4 py-3 align-top text-sm text-gray-600 max-w-md">
                    {truncate(s.facts, 100)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
