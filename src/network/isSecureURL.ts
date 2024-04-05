/**
 * Checks if a URL uses HTTPS.
 *
 * Example: isSecureURL("https://example.com") → true
 *
 * @author @dailker
 * @param {string} url - The URL string.
 * @returns {boolean} True if HTTPS.
 */
export function isSecureURL(url: string): boolean {
  try {
    return new URL(url).protocol === 'https:';
  } catch {
    return false;
  }
}
