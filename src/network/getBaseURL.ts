/**
 * Extracts the base URL (protocol + host + port).
 *
 * Example: getBaseURL("https://example.com:8080/path?foo=bar") → "https://example.com:8080"
 *
 * @author @dailker
 * @param {string} url - The URL string.
 * @returns {string} The base URL.
 */
export function getBaseURL(url: string): string {
  try {
    const u = new URL(url);
    return `${u.protocol}//${u.hostname}${u.port ? ':' + u.port : ''}`;
  } catch {
    return '';
  }
}
