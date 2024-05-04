/**
 * Extracts the root domain (e.g., example.com) from a URL.
 *
 * Example: getDomain('https://foo.bar.example.com') → 'example.com'
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @returns {string|null} The root domain or null if invalid.
 */
export function getDomain(url: string): string | null {
  try {
    const u = new URL(url, 'http://x');
    const parts = u.hostname.split('.');
    if (parts.length < 2) return null;
    return parts.slice(-2).join('.');
  } catch {
    return null;
  }
}
