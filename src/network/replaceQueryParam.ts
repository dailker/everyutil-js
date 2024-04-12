/**
 * Adds or updates a query parameter in a URL.
 *
 * Example: replaceQueryParam("/a?b=1", "b", "2") → "/a?b=2"
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @param {string} key - Query parameter key.
 * @param {string} value - Query parameter value.
 * @returns {string} The updated URL.
 */
export function replaceQueryParam(url: string, key: string, value: string): string {
  try {
    const u = new URL(url, 'http://x');
    u.searchParams.set(key, value);
    return u.pathname + (u.search ? '?' + u.searchParams.toString() : '') + (u.hash || '');
  } catch {
    return url;
  }
}
