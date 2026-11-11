#!/usr/bin/env node
/**
 * Public and admin-gate smoke check.
 *   BASE_URL=https://rovnerlawwebsite.vercel.app node scripts/smoke-routes.mjs
 */
const base = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');

const okRoutes = [
  '/',
  '/about',
  '/attorneys',
  '/contact',
  '/locations',
  '/photo-gallery',
  '/in-the-news',
  '/disclaimer',
  '/practice',
  '/practice/personal-injury',
  '/practice/auto-accidents',
  '/admin/login',
  '/sitemap.xml',
  '/api/health',
  '/api/settlements',
  '/api/practice-areas',
  '/api/lawyers',
];

const loginRedirects = ['/admin', '/admin/dashboard', '/admin/lawyers'];

const failures = [];

for (const path of okRoutes) {
  const res = await fetch(base + path, { redirect: 'manual' });
  if (res.status !== 200) failures.push({ path, status: res.status, expected: 200 });
  else console.log(`ok 200 ${path}`);
}

for (const path of loginRedirects) {
  const res = await fetch(base + path, { redirect: 'manual' });
  const loc = res.headers.get('location') || '';
  const good = [302, 307, 308].includes(res.status) && loc.includes('/admin/login');
  if (!good) failures.push({ path, status: res.status, location: loc, expected: 'redirect to /admin/login' });
  else console.log(`ok ${res.status} ${path} -> ${loc}`);
}

if (failures.length) {
  console.error('\nFailures:');
  console.error(failures);
  process.exit(1);
}
console.log(`\nSmoke passed against ${base}`);
