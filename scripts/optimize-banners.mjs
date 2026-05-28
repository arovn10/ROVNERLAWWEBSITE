// One-off image optimization for banner hero photos.
// Usage: node scripts/optimize-banners.mjs
//
// Crops portrait/square source photos to a 3:1 landscape band that fits
// the hero containers (aspect-[3/1] desktop, aspect-[2/1] mobile — both
// derive from the same source via next/image responsive sizing).
//
// Lanczos3 upscale to 2400w; WebP q88 = sharp at <100KB per asset.

import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const photos = path.join(__dirname, '..', 'public', 'photos');

const TARGETS = [
  {
    label: 'sign',
    src: path.join(photos, 'banner-sign-rovner-law.png'),
    out: path.join(photos, 'banner-sign-hero.webp'),
    // Source: 844×1024 portrait. Sign panel y≈70..680.
    // 4:1 cinematic band over the LAW OFFICES headline + scales emblem.
    extract: { left: 0, top: 140, width: 844, height: 211 },
    resize: { w: 3200, h: 800 },
  },
  {
    label: 'building',
    src: path.join(photos, 'banner-sign-building.png'),
    out: path.join(photos, 'banner-building-hero.webp'),
    // Source: 1024×1024 square. Trim sky top + lawn bottom.
    // 3:1 band over sign-letters + roofline.
    extract: { left: 0, top: 140, width: 1024, height: 341 },
    resize: { w: 2400, h: 800 },
  },
];

for (const t of TARGETS) {
  const info = await sharp(t.src)
    .extract(t.extract)
    .resize(t.resize.w, t.resize.h, { kernel: 'lanczos3', fit: 'fill' })
    .webp({ quality: 88, effort: 6 })
    .toFile(t.out);
  console.log(`${t.label}: ${path.basename(t.out)} ${info.width}x${info.height} ${Math.round(info.size / 1024)}KB`);
}
