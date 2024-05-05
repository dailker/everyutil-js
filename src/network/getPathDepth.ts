/**
 * Counts the number of path segments in a URL.
 *
 * Example: getPathDepth('https://a.com/foo/bar') → 2
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @returns {number} Path segment count.
 */
export function getPathDepth(url: string): number {
  try {
    const u = new URL(url, 'http://x');
    return u.pathname.split('/').filter(Boolean).length;
  } catch {
    return 0;
  }
}
