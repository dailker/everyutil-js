/**
 * Checks if a URL is absolute.
 *
 * Example: isAbsoluteURL("https://a.com") → true
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} True if absolute.
 */
export function isAbsoluteURL(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
