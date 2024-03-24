/**
 * Compares two URLs for equality, ignoring superficial changes (trailing slash, etc).
 *
 * Example: compareURLs("/a/", "/a") → true
 *
 * @author @dailker
 * @param {string} a - First URL.
 * @param {string} b - Second URL.
 * @returns {boolean} True if equivalent.
 */
import { canonicalizeURL } from './canonicalizeURL';
export function compareURLs(a: string, b: string): boolean {
  const ca = canonicalizeURL(a).replace(/\/?$/, '');
  const cb = canonicalizeURL(b).replace(/\/?$/, '');
  return ca === cb;
}
