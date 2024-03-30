/**
 * Converts a URL to https protocol.
 *
 * Example: forceHttps("http://a.com") → "https://a.com"
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @returns {string} The https URL.
 */
export function forceHttps(url: string): string {
  return url.replace(/^http:/i, 'https:');
}
