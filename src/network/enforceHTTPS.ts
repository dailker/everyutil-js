/**
 * Converts a URL to HTTPS if it is HTTP.
 *
 * @author @dailker
 * @param {string} url - The URL to enforce HTTPS on.
 * @returns {string} The HTTPS URL.
 */
export function enforceHTTPS(url: string): string {
  try {
    const u = new URL(url);
    if (u.protocol === 'http:') u.protocol = 'https:';
    return u.toString();
  } catch {
    return url;
  }
}
