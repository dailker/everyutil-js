/**
 * Constructs a full URL with query parameters from a base URL and params object.
 *
 * Example: buildURL("https://example.com", { foo: "bar" }) → "https://example.com?foo=bar"
 *
 * @author @dailker
 * @param {string} base - The base URL.
 * @param {object} params - Query parameters as an object.
 * @returns {string} The constructed URL.
 */
export function buildURL(base: string, params: Record<string, any>): string {
  const url = new URL(base);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.toString();
}
