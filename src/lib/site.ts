const FALLBACK = 'https://rovnerlaw.com';

function normalize(url: string) {
  return url.replace(/\/$/, '');
}

export const SITE_URL = normalize(process.env.NEXT_PUBLIC_SITE_URL || FALLBACK);
