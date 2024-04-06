/**
 * Advanced pattern match for URLs (e.g., /user/:id style).
 *
 * Example: matchURLPattern("/user/123", "/user/:id") → true
 *
 * @author @dailker
 * @param {string} url - The URL to test.
 * @param {string} pattern - The route pattern.
 * @returns {boolean} True if matches.
 */
export function matchURLPattern(url: string, pattern: string): boolean {
  const regex = new RegExp('^' + pattern.replace(/:[^/]+/g, '[^/]+') + '$');
  return regex.test(url);
}
