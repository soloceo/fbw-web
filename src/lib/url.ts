/**
 * URL helpers
 * -------------------------------------------------------------
 * Astro emits `import.meta.env.BASE_URL` without a trailing slash
 * when `base` is set (e.g. `/fbw-web`). Naked concatenation with
 * `'brand/x.svg'` therefore produces `/fbw-webbrand/x.svg`, which
 * was the bug that shipped our first broken logos.
 *
 * Every path-building call site in the codebase should go through
 * one of these helpers instead of re-implementing the trim-and-
 * concatenate dance.
 *
 *   withBase('/practice-areas')   → '/fbw-web/practice-areas'
 *   withBase('brand/logo.svg')    → '/fbw-web/brand/logo.svg'
 *   withBase('https://example')   → 'https://example' (untouched)
 *   withBase()                    → '/fbw-web/'
 */

/** The site base path, with no trailing slash (e.g. `/fbw-web`). */
export const BASE: string = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");

/**
 * Prefix an internal path with the site base. External URLs
 * (http/https/mailto/tel) are returned unchanged.
 */
export function withBase(path?: string): string {
  if (!path) return `${BASE}/`;
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path;
  return `${BASE}/${path.replace(/^\//, "")}`;
}

/**
 * Build a fully-qualified absolute URL (origin + base + path).
 * Used for canonical / og:url / schema.org `url` fields.
 */
export function absoluteUrl(path: string, siteOrigin: URL | string): string {
  return new URL(withBase(path), siteOrigin).toString();
}
