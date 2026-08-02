/**
 * Renders a schema.org JSON-LD block. Server-renderable (no "use client"),
 * so it works from both server-component pages and the layout.tsx files that
 * sit alongside client-component pages (see src/lib/schema-org.ts for why
 * that pairing is needed for the ten hand-written practice pages).
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
