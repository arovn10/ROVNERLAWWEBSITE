import { notFound, redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export default async function PracticeAreaDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
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

  const { slug } = await params;

  if (dedicatedSlugs.includes(slug)) {
    return notFound();
  }

  // Unknown slug: redirect to practice areas listing (avoids redirect loop)
  redirect('/practice');
} 