/**
 * Checks if a URL points to localhost or a local IP.
 *
 * Example: isLocalhost("http://localhost:3000") → true
 *
 * @author @dailker
 * @param {string} url - The URL string.
 * @returns {boolean} True if localhost or local IP.
 */
export function isLocalhost(url: string): boolean {
  try {
    const u = new URL(url);
    return (
      u.hostname === 'localhost' ||
      u.hostname === '127.0.0.1' ||
      u.hostname === '::1' ||
      u.hostname.startsWith('192.168.') ||
      u.hostname.startsWith('10.') ||
      u.hostname.startsWith('172.')
    );
  } catch {
    return false;
  }
}
