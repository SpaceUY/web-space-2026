import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { visit } from "unist-util-visit";
import { imageSize } from "image-size";

// Markdown content images (blog posts, case studies) are plain <img> tags
// with no width/height, so the browser reserves zero space for them until
// they load, causing layout shift. This reads each local image's real
// pixel dimensions at build time and sets width/height on the <img> HAST
// node, the same CLS fix already applied to the case-study hero image.
// Remote images and anything already sized are left untouched.
export function rehypeImageDimensions() {
  const publicDir = fileURLToPath(new URL("../../public", import.meta.url));

  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "img") return;
      const src = node.properties?.src;
      if (!src || typeof src !== "string") return;
      if (node.properties.width || node.properties.height) return;
      if (/^https?:\/\//.test(src)) return;

      const filePath = `${publicDir}${src.startsWith("/") ? src : `/${src}`}`;
      if (!existsSync(filePath)) return;

      try {
        const { width, height } = imageSize(readFileSync(filePath));
        if (width && height) {
          node.properties.width = width;
          node.properties.height = height;
        }
      } catch {
        // Corrupt/unreadable image: leave it unsized rather than fail the build.
      }
    });
  };
}
