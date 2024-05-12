/**
 * Strips credentials or masks sensitive data in an email URL.
 *
 * Example: sanitizeEmailURL('smtp://user:pass@host:25') → 'smtp://***:***@host:25'
 *
 * @author @dailker
 * @param {string} url - The email URL.
 * @returns {string} The sanitized URL.
 */
export function sanitizeEmailURL(url: string): string {
  try {
    const u = new URL(url);
    if (u.username || u.password) {
      u.username = u.username ? '***' : '';
      u.password = u.password ? '***' : '';
    }
    return u.toString();
  } catch {
    return url;
  }
}
