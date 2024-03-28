/**
 * Extracts query parameters from a URL as an object.
 *
 * Example: extractQueryParams("https://example.com?foo=bar&baz=qux") → { foo: "bar", baz: "qux" }
 *
 * @author @dailker
 * @param {string} url - The URL string.
 * @returns {object} Query parameters as an object.
 */
export function extractQueryParams(url: string): Record<string, string> {
  try {
    const u = new URL(url);
    const params: Record<string, string> = {};
    u.searchParams.forEach((v, k) => (params[k] = v));
    return params;
  } catch {
    return {};
  }
}
