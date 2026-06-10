#!/usr/bin/env node
/**
 * Converts heavy PNG/JPEG images (> 300 KB) under public/images to WebP
 * and rewrites all source references. Originals are deleted only when
 * every reference was successfully rewritten.
 *
 *   node scripts/optimize-images.mjs          # apply
 *   node scripts/optimize-images.mjs --dry    # report only
 */
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, statSync, unlinkSync } from "node:fs";
import { join, relative } from "node:path";
import sharp from "sharp";

const ROOT = new URL("..", import.meta.url).pathname;
const THRESHOLD = 300 * 1024;
const QUALITY = 80;
const DRY = process.argv.includes("--dry");

// Source dirs whose files may reference image paths
const REF_GLOBS = ["src", "public/llms.txt", "public/llms-full.txt"];

const files = execSync(
  `find public/images -type f \\( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \\) -size +300k`,
  { cwd: ROOT, encoding: "utf8" }
)
  .trim()
  .split("\n")
  .filter(Boolean);

const refFiles = execSync(
  `grep -rl "/images/" ${REF_GLOBS.join(" ")} 2>/dev/null || true`,
  { cwd: ROOT, encoding: "utf8" }
)
  .trim()
  .split("\n")
  .filter(Boolean);

let savedTotal = 0;
let converted = 0;
let skippedUnused = 0;

for (const rel of files) {
  const abs = join(ROOT, rel);
  const urlPath = "/" + relative(join(ROOT, "public"), abs); // e.g. /images/content/x.png
  const webpUrl = urlPath.replace(/\.(png|jpe?g)$/i, ".webp");
  const webpAbs = abs.replace(/\.(png|jpe?g)$/i, ".webp");

  // find referencing files
  const referencing = refFiles.filter((rf) => {
    try {
      return readFileSync(join(ROOT, rf), "utf8").includes(urlPath);
    } catch {
      return false;
    }
  });

  if (referencing.length === 0) {
    skippedUnused++;
    continue; // unused — leave alone
  }

  const before = statSync(abs).size;
  if (!DRY) {
    await sharp(abs).webp({ quality: QUALITY, effort: 4 }).toFile(webpAbs);
    const after = statSync(webpAbs).size;
    if (after >= before) {
      // no gain — keep original
      unlinkSync(webpAbs);
      continue;
    }
    for (const rf of referencing) {
      const p = join(ROOT, rf);
      writeFileSync(p, readFileSync(p, "utf8").split(urlPath).join(webpUrl));
    }
    unlinkSync(abs);
    savedTotal += before - after;
    converted++;
    console.log(
      `${urlPath} ${(before / 1024 / 1024).toFixed(1)}MB → ${(after / 1024 / 1024).toFixed(2)}MB (${referencing.length} refs)`
    );
  } else {
    console.log(`[dry] ${urlPath} ${(before / 1024 / 1024).toFixed(1)}MB, refs: ${referencing.join(", ")}`);
  }
}

console.log(
  `\n${converted} convertidas, ${skippedUnused} sin referencias (intactas), ahorro total: ${(savedTotal / 1024 / 1024).toFixed(0)}MB`
);
