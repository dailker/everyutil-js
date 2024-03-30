/**
 * Appends a cache-busting query parameter to a URL.
 *
 * Example: generateCacheBustedURL("/img.png") → "/img.png?t=1620000000000"
 *
 * @author @dailker
 * @param {string} url - The URL to modify.
 * @returns {string} The cache-busted URL.
 */
export function generateCacheBustedURL(url: string): string {
  const t = Date.now();
  if (url.includes('?')) {
    return url + `&t=${t}`;
  } else {
    return url + `?t=${t}`;
  }
}
