/**
 * Normalizes a URL (lowercase scheme/host, remove default ports, trailing slashes).
 *
 * Example: normalizeURL("HTTP://EXAMPLE.COM:80/") → "http://example.com/"
 *
 * @author @dailker
 * @param {string} url - The URL string.
 * @returns {string} The normalized URL.
 */
export function normalizeURL(url: string): string {
  try {
    const u = new URL(url);
    let port = u.port;
    if ((u.protocol === 'http:' && u.port === '80') || (u.protocol === 'https:' && u.port === '443')) port = '';
    let path = u.pathname.endsWith('/') ? u.pathname : u.pathname + '/';
    return `${u.protocol.toLowerCase()}//${u.hostname.toLowerCase()}${port ? ':' + port : ''}${path}${u.search}${u.hash}`;
  } catch {
    return url;
  }
}
