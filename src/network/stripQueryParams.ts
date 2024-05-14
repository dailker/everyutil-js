/**
 * Removes all query parameters from a URL.
 *
 * Example: stripQueryParams('https://a.com/foo?bar=1') → 'https://a.com/foo'
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @returns {string} The URL without query params.
 */
export function stripQueryParams(url: string): string {
  try {
    const u = new URL(url, 'http://x');
    u.search = '';
    return u.origin + u.pathname + (u.hash || '');
  } catch {
    return url;
  }
}
