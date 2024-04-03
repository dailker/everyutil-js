/**
 * Extracts the hostname from a URL.
 *
 * Example: getURLHostname("https://a.com:8080/path") → "a.com"
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @returns {string|null} The hostname or null if invalid.
 */
export function getURLHostname(url: string): string | null {
  try {
    return new URL(url, 'http://x').hostname;
  } catch {
    return null;
  }
}
