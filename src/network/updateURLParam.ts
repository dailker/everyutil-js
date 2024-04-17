/**
 * Adds or updates a query parameter in a URL.
 *
 * Example: updateURLParam("https://example.com?foo=bar", "foo", "baz") → "https://example.com?foo=baz"
 *
 * @author @dailker
 * @param {string} url - The URL string.
 * @param {string} param - The parameter to add or update.
 * @param {string} value - The value to set.
 * @returns {string} The updated URL.
 */
export function updateURLParam(url: string, param: string, value: string): string {
  try {
    const u = new URL(url);
    u.searchParams.set(param, value);
    return u.toString();
  } catch {
    return url;
  }
}
