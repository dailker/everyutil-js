/**
 * Removes a specific query parameter from a URL.
 *
 * Example: removeURLParam("https://example.com?foo=bar&baz=qux", "foo") → "https://example.com?baz=qux"
 *
 * @author @dailker
 * @param {string} url - The URL string.
 * @param {string} param - The parameter to remove.
 * @returns {string} The updated URL.
 */
export function removeURLParam(url: string, param: string): string {
  try {
    const u = new URL(url);
    u.searchParams.delete(param);
    return u.toString();
  } catch {
    return url;
  }
}
