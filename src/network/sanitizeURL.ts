/**
 * Removes unsafe or tracking parameters from a URL.
 * @author @dailker
 * @param {string} url - The URL to sanitize.
 * @returns {string} The sanitized URL.
 */
export function sanitizeURL(url: string): string {
  try {
    const u = new URL(url);
    // Remove common tracking params
    ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid'].forEach(p => u.searchParams.delete(p));
    return u.toString();
  } catch {
    return url;
  }
}
