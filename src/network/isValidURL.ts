/**
 * Validates if a string is a well-formed URL.
 *
 * Example: isValidURL("https://example.com") → true
 *
 * @author @dailker
 * @param {string} url - The URL string.
 * @returns {boolean} True if valid URL.
 */
export function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
