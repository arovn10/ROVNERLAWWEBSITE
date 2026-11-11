import Link from 'next/link';

const LINKS: { href: string; label: string }[] = [
  { href: '/locations/philadelphia', label: 'Philadelphia' },
  { href: '/locations/bucks-county', label: 'Bucks County' },
  { href: '/locations/montgomery-county', label: 'Montgomery County' },
  { href: '/locations', label: 'Delaware County' },
  { href: '/locations', label: 'Chester County' },
  { href: '/locations/new-jersey', label: 'New Jersey' },
];

/**
 * Replaces the bold county sentence that named the service area but linked
 * nowhere. Delaware and Chester stay on the locations page; they do not have
 * their own URL.
 */
export default function ServiceAreaLinks() {
  return (
    <p>
      <strong>Serving </strong>
      {LINKS.map((link, index) => (
        <span key={link.label}>
          {index > 0 && (index === LINKS.length - 1 ? ' and ' : ', ')}
          <Link href={link.href} className="underline underline-offset-2 hover:text-amber-800">
            {link.label}
          </Link>
        </span>
      ))}
      .
    </p>
  );
}
