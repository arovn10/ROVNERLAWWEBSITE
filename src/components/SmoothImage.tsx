"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

/**
 * Wraps Next.js Image with a smooth fade-in on load to prevent choppy appearance.
 * Uses Apple-style easing for a polished feel.
 */
export function SmoothImage({ className = "", ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const fill = "fill" in props && props.fill;
  return (
    <div
      className={`overflow-hidden ${fill ? "absolute inset-0" : "relative"} ${className}`}
    >
      <Image
        {...props}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
