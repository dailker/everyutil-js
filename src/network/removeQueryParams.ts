/**
 * Removes multiple query parameters from a URL.
 *
 * Example: removeQueryParams("/a?b=1&c=2", ["b"]) → "/a?c=2"
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @param {string[]} keys - Keys to remove.
 * @returns {string} The updated URL.
 */
export function removeQueryParams(url: string, keys: string[]): string {
  try {
    const u = new URL(url, 'http://x');
    keys.forEach(k => u.searchParams.delete(k));
    return u.pathname + (u.search ? '?' + u.searchParams.toString() : '') + (u.hash || '');
  } catch {
    return url;
  }
}
