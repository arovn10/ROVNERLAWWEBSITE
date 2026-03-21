"use client";

/**
 * Hides the Next.js dev overlay portal (nextjs-portal) in production only.
 * The portal is used for error overlays in development; we hide it on the live site.
 */
export function HideDevPortal() {
  if (process.env.NODE_ENV !== "production") return null;
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: "nextjs-portal{display:none!important}",
      }}
    />
  );
}
