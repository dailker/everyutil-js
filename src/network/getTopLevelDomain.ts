/**
 * Extracts the top-level domain (TLD) from a URL.
 *
 * Example: getTopLevelDomain('https://foo.bar.example.com') → 'com'
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @returns {string|null} The TLD or null if invalid.
 */
export function getTopLevelDomain(url: string): string | null {
  try {
    const u = new URL(url, 'http://x');
    const parts = u.hostname.split('.');
    return parts.length ? parts[parts.length - 1] : null;
  } catch {
    return null;
  }
}
