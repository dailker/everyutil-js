/**
 * Parses a URL hash string (e.g. #foo=1&bar=2) into an object.
 * @author @dailker
 * @param {string} hash - The hash string.
 * @returns {Record<string, string>} The parsed object.
 */
export function urlHashToObject(hash: string): Record<string, string> {
  const h = hash.startsWith('#') ? hash.slice(1) : hash;
  return h.split('&').filter(Boolean).reduce((acc, pair) => {
    const [k, v] = pair.split('=');
    if (k) acc[decodeURIComponent(k)] = v ? decodeURIComponent(v) : '';
    return acc;
  }, {} as Record<string, string>);
}
