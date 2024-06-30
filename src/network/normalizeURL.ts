/**
 * Normalizes a URL: removes trailing slashes, sorts query params, etc.
 *
 * Example: normalizeURL('https://a.com/foo/?b=2&a=1') → 'https://a.com/foo?a=1&b=2'
 *
 * @author @dailker
 * @param {string} url - The URL to normalize.
 * @returns {string} The normalized URL.
 */
export function normalizeURL(url: string): string {
  try {
    const u = new URL(url, 'http://x');
    u.pathname = u.pathname.replace(/\/+$/, '');
    const params = Array.from(u.searchParams.entries()).sort(([a], [b]) => a.localeCompare(b));
    u.search = params.map(([k, v]) => `${k}=${v}`).join('&');
    return u.origin + u.pathname + (u.search ? '?' + u.search : '') + (u.hash || '');
  } catch {
    return url;
  }
}
