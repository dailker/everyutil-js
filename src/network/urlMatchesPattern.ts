/**
 * Checks if a URL matches a wildcard string or RegExp pattern.
 *
 * Example: urlMatchesPattern("https://a.com/page", "https://*.com/*") → true
 *
 * @author @dailker
 * @param {string} url - The URL to test.
 * @param {string|RegExp} pattern - Wildcard string ("*" allowed) or RegExp.
 * @returns {boolean} True if matches.
 */
export function urlMatchesPattern(url: string, pattern: string | RegExp): boolean {
  if (pattern instanceof RegExp) return pattern.test(url);
  // Convert wildcard pattern to RegExp
  const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*');
  const regex = new RegExp('^' + escaped + '$');
  return regex.test(url);
}
