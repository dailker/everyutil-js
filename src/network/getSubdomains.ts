/**
 * Returns an array of subdomains from a URL.
 *
 * Example: getSubdomains("https://a.b.example.com") → ["a", "b"]
 *
 * @author @dailker
 * @param {string} url - The URL string.
 * @returns {string[]} Array of subdomains (empty if none).
 */
export function getSubdomains(url: string): string[] {
  try {
    const { hostname } = new URL(url);
    const parts = hostname.split('.');
    if (parts.length <= 2) return [];
    return parts.slice(0, -2);
  } catch {
    return [];
  }
}
