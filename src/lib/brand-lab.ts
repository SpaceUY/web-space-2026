/**
 * Brand v2 lab: an experiment, never a release.
 *
 * This branch (feat/brand-v2) tries the SpaceDev brand system on the whole
 * site so each part can be compared with what is live today. It must never
 * reach production: astro.config.mjs refuses to build when VERCEL_ENV is
 * "production", and while BRAND_LAB is true the site renders noindex, loads
 * no analytics and blocks form submissions.
 *
 * Shipping any of this is a separate decision. If it is ever taken, the
 * cleanup starts here: set BRAND_LAB to false, remove src/pages/brand-lab,
 * the brand-lab components and the guard in astro.config.mjs.
 */
export const BRAND_LAB = true;

export type BrandVersion = "v1" | "v2";

/** Version shown when neither the URL (?brand=) nor the viewer's last choice says otherwise. */
export const BRAND_DEFAULT: BrandVersion = "v2";

export const BRAND_STORAGE_KEY = "sd-brand-version";
