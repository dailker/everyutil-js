/**
 * Detects the protocol of a URL (e.g., http, https, ftp).
 *
 * Example: detectProtocol("https://a.com") → "https"
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @returns {string|null} The protocol or null if invalid.
 */
export function detectProtocol(url: string): string | null {
  try {
    return new URL(url, 'http://x').protocol.replace(':', '');
  } catch {
    return null;
  }
}
