/**
 * Removes username and password from a URL.
 *
 * @author @dailker
 * @param {string} url - The URL to strip auth from.
 * @returns {string} The sanitized URL.
 */
export function stripAuthFromURL(url: string): string {
  try {
    const u = new URL(url);
    u.username = '';
    u.password = '';
    return u.toString();
  } catch {
    return url;
  }
}
