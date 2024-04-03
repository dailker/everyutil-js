/**
 * Parses the hash fragment of a URL as key-value pairs.
 *
 * Example: getURLHashParams("/a#foo=1&bar=2") → { foo: "1", bar: "2" }
 *
 * @author @dailker
 * @param {string} url - The URL.
 * @returns {Record<string, string>} Hash params.
 */
export function getURLHashParams(url: string): Record<string, string> {
  try {
    const u = new URL(url, 'http://x');
    const hash = u.hash.replace(/^#/, '');
    const params = new URLSearchParams(hash);
    const out: Record<string, string> = {};
    for (const [k, v] of params.entries()) out[k] = v;
    return out;
  } catch {
    return {};
  }
}
