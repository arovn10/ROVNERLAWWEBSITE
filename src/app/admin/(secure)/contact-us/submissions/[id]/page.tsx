import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Mail, Phone, Calendar, FileText, Briefcase, UserCheck } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import DeleteSubmissionButton from './DeleteSubmissionButton';

export const dynamic = 'force-dynamic';

function formatDate(d: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(d);
}

function formatDateOnly(d: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

export default async function ContactSubmissionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const submission = await prisma.contactSubmission.findUnique({ where: { id } });

  if (!submission) {
    notFound();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/admin/contact-us/submissions"
          className="inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Submissions
        </Link>
        <DeleteSubmissionButton id={submission.id} />
      </div>

      <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-1">
        Submission from {submission.name}
      </h1>
      <p className="text-sm text-gray-500 mb-6 inline-flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5" />
        Received {formatDate(submission.createdAt)}
      </p>

      <div className="bg-white/70 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
          Contact
        </h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Name" icon={null}>
            {submission.name}
          </Field>
          <Field label="Email" icon={<Mail className="h-3.5 w-3.5 text-gray-400" />}>
            <a
              href={`mailto:${submission.email}`}
              className="text-blue-700 hover:underline"
            >
              {submission.email}
            </a>
          </Field>
          <Field label="Phone" icon={<Phone className="h-3.5 w-3.5 text-gray-400" />}>
            {submission.phone ? (
              <a href={`tel:${submission.phone}`} className="text-blue-700 hover:underline">
                {submission.phone}
              </a>
            ) : (
              <span className="text-gray-400">Not provided</span>
            )}
          </Field>
          <Field label="Address" icon={null}>
            {submission.address || <span className="text-gray-400">Not provided</span>}
          </Field>
        </dl>
      </div>

      <div className="bg-white/70 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
          Case
        </h2>
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Field
            label="Date of incident"
            icon={<Calendar className="h-3.5 w-3.5 text-gray-400" />}
          >
            {submission.dateOfIncident ? (
              formatDateOnly(submission.dateOfIncident)
            ) : (
              <span className="text-gray-400">Not provided</span>
            )}
          </Field>
          <Field
            label="Case type"
            icon={<Briefcase className="h-3.5 w-3.5 text-gray-400" />}
          >
            {submission.caseType || <span className="text-gray-400">Not provided</span>}
          </Field>
          <Field
            label="Represented by another lawyer"
            icon={<UserCheck className="h-3.5 w-3.5 text-gray-400" />}
          >
            {submission.represented || <span className="text-gray-400">Not provided</span>}
          </Field>
        </dl>
      </div>

      <div className="bg-white/70 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4 inline-flex items-center gap-1.5">
          <FileText className="h-3.5 w-3.5 text-gray-400" />
          What happened
        </h2>
        <p className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed">
          {submission.facts}
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1 inline-flex items-center gap-1.5">
        {icon}
        {label}
      </dt>
      <dd className="text-sm text-gray-900 font-medium">{children}</dd>
    </div>
  );
}
