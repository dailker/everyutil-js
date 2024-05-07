/**
 * Extracts the subdomain from a URL.
 *
 * Example: getSubdomain('https://foo.bar.example.com') → 'foo.bar'
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @returns {string|null} The subdomain or null if none.
 */
export function getSubdomain(url: string): string | null {
  try {
    const u = new URL(url, 'http://x');
    const parts = u.hostname.split('.');
    if (parts.length <= 2) return null;
    return parts.slice(0, -2).join('.');
  } catch {
    return null;
  }
}
