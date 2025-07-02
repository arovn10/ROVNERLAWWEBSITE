import { notFound, redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export default async function PracticeAreaDynamicPage({ params }: { params: { slug: string } }) {
  // List of dedicated slugs (directories with their own page)
  const dedicatedSlugs = [
    'auto-accidents',
    'criminal-defense',
    'defective-products',
    'family-law',
    'medical-malpractice',
    'motorcycle-accidents',
    'personal-injury',
    'premises-liability',
    'truck-accidents',
    'workers-compensation',
  ];

  const { slug } = params;

  if (dedicatedSlugs.includes(slug)) {
    // If the slug matches a dedicated page, show 404 (should never hit this file)
    return notFound();
  }

  // Otherwise, redirect to General Legal Matters
  redirect('/practice/general-legal-matters');
  return null;
} 