/**
 * Checks if a URL is same-origin as window.location.origin.
 *
 * Example: isSameOrigin(url) → true
 *
 * @author @dailker
 * @param {string} url - The URL to check.
 * @returns {boolean} True if same origin.
 */
export function isSameOrigin(url: string): boolean {
  try {
    const u = new URL(url, window.location.origin);
    return u.origin === window.location.origin;
  } catch {
    return false;
  }
}
