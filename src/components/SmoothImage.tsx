"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

/**
 * next/image with an optional fade-in.
 *
 * This used to render every image at `opacity: 0` until JavaScript fired
 * `onLoad`. Two problems with that:
 *
 *  1. An image that fails to load never fires `onLoad`, so it stayed invisible
 *     permanently. The attorney list was rendering ten invisible headshots
 *     because the `/photos/default-headshot.jpg` fallback does not exist.
 *  2. Above-the-fold images could not paint until React had hydrated, which
 *     delays Largest Contentful Paint — the opposite of the "polished feel" the
 *     original comment claimed. A blur-up placeholder feels faster, because
 *     something is on screen immediately.
 *
 * So: `priority` images never fade (they are the LCP candidate and must paint at
 * once), everything else fades in but reveals itself on error as well as on
 * load, and reduced-motion users get no transition.
 */
export function SmoothImage({ className = "", ...props }: ImageProps) {
  const [settled, setSettled] = useState(false);
  const fill = "fill" in props && props.fill;
  // Above-the-fold images opt out of the fade entirely.
  const instant = "priority" in props && props.priority;

  return (
    <div
      className={`overflow-hidden ${fill ? "absolute inset-0" : "relative"} ${className}`}
    >
      <Image
        {...props}
        alt={props.alt}
        onLoad={() => setSettled(true)}
        onError={() => setSettled(true)}
        className={
          instant
            ? undefined
            : `transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] motion-reduce:transition-none ${
                settled ? "opacity-100" : "opacity-0"
              }`
        }
      />
    </div>
  );
}
