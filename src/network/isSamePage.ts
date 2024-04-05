/**
 * Checks if two URLs refer to the same page (ignores query/hash).
 *
 * Example: isSamePage("/a?x=1#t", "/a") → true
 *
 * @author @dailker
 * @param {string} urlA - First URL.
 * @param {string} urlB - Second URL.
 * @returns {boolean} True if same page.
 */
export function isSamePage(urlA: string, urlB: string): boolean {
  try {
    const a = new URL(urlA, 'http://x');
    const b = new URL(urlB, 'http://x');
    return a.pathname === b.pathname;
  } catch {
    return false;
  }
}
