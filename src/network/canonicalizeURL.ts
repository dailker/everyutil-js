/**
 * Canonicalizes a URL: lowercase host, remove default ports, sort params.
 *
 * Example: canonicalizeURL("HTTP://A.COM:80/?b=2&a=1") → "http://a.com/?a=1&b=2"
 *
 * @author @dailker
 * @param {string} url - The URL to canonicalize.
 * @returns {string} The canonical URL.
 */
export function canonicalizeURL(url: string): string {
  try {
    const u = new URL(url);
    u.hostname = u.hostname.toLowerCase();
    if ((u.protocol === 'http:' && u.port === '80') || (u.protocol === 'https:' && u.port === '443')) {
      u.port = '';
    }
    const params = Array.from(u.searchParams.entries()).sort(([a], [b]) => a.localeCompare(b));
    u.search = params.map(([k, v]) => `${k}=${v}`).join('&');
    return u.origin + u.pathname + (u.search ? '?' + u.search : '');
  } catch {
    return url;
  }
}
