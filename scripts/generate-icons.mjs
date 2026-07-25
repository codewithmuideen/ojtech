// One-off PWA icon generator, run manually with:
//   node scripts/generate-icons.mjs
// Not part of the build — icons are committed to public/icons/ once generated.
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = path.join(root, "public", "favicon.png");
const outDir = path.join(root, "public", "icons");

mkdirSync(outDir, { recursive: true });

const BRAND_BG = "#17162a";

const targets = [
  { name: "icon-192.png", size: 192, padding: 0.16, background: "transparent" },
  { name: "icon-512.png", size: 512, padding: 0.16, background: "transparent" },
  { name: "icon-maskable-192.png", size: 192, padding: 0.3, background: BRAND_BG },
  { name: "icon-maskable-512.png", size: 512, padding: 0.3, background: BRAND_BG },
  { name: "apple-touch-icon.png", size: 180, padding: 0.18, background: "#ffffff" },
];

for (const target of targets) {
  const inner = Math.round(target.size * (1 - target.padding * 2));
  await sharp(source)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: Math.round((target.size - inner) / 2),
      bottom: Math.round((target.size - inner) / 2),
      left: Math.round((target.size - inner) / 2),
      right: Math.round((target.size - inner) / 2),
      background: target.background,
    })
    .resize(target.size, target.size)
    .png()
    .toFile(path.join(outDir, target.name));
  console.log(`Generated ${target.name}`);
}
