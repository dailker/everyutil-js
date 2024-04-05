/**
 * Returns true if the status code is a redirect (3xx).
 *
 * Example: isRedirectStatus(302) → true
 *
 * @author @dailker
 * @param {number} code - HTTP status code.
 * @returns {boolean} True if redirect.
 */
export function isRedirectStatus(code: number): boolean {
  return code >= 300 && code < 400;
}
