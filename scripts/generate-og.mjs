import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "public/images/logo/spacedev-logo.svg");
const dst = path.join(root, "public/images/og-default.png");

// The original SVG is already 1200×630 (the OG asset from spacedev.io).
// Rasterize to PNG with a deep navy background for any transparent areas.
await sharp(src, { density: 200 })
  .resize(1200, 630, {
    fit: "contain",
    background: { r: 25, g: 20, b: 41, alpha: 1 }, // var(--sd-purple-deep) #191429
  })
  .flatten({ background: { r: 25, g: 20, b: 41, alpha: 1 } })
  .png({ quality: 90 })
  .toFile(dst);

console.log(`Generated: ${path.relative(root, dst)}`);
