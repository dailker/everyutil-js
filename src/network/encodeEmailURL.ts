/**
 * Properly escapes username and password in an email URL.
 *
 * Example: encodeEmailURL('smtp://user:pa ss@host:25')
 *
 * @author @dailker
 * @param {string} url - The email URL.
 * @returns {string} The encoded URL.
 */
export function encodeEmailURL(url: string): string {
  try {
    const u = new URL(url);
    if (u.username) u.username = encodeURIComponent(decodeURIComponent(u.username));
    if (u.password) u.password = encodeURIComponent(decodeURIComponent(u.password));
    return u.toString();
  } catch {
    return url;
  }
}
