/**
 * Rewrites a URL to use a CDN base domain.
 *
 * Example: appendCDNPrefix("/img.png", "https://cdn.com") → "https://cdn.com/img.png"
 *
 * @author @dailker
 * @param {string} url - The original URL.
 * @param {string} cdnBase - The CDN base URL.
 * @returns {string} The rewritten URL.
 */
export function appendCDNPrefix(url: string, cdnBase: string): string {
  if (!cdnBase.endsWith('/')) cdnBase += '/';
  return cdnBase.replace(/\/$/, '') + '/' + url.replace(/^\//, '');
}
