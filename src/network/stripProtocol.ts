/**
 * Removes the protocol (e.g., http://) from a URL.
 *
 * Example: stripProtocol("https://a.com") → "a.com"
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @returns {string} The URL without protocol.
 */
export function stripProtocol(url: string): string {
  return url.replace(/^\w+:\/\//, '');
}
