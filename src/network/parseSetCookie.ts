/**
 * Parses multiple Set-Cookie headers from a string or array.
 *
 * Example: parseSetCookie("a=1; Path=/, b=2; Path=/") → [{ name: 'a', value: '1', ... }, ...]
 *
 * @author @dailker
 * @param {string|string[]} header - Set-Cookie header(s).
 * @returns {Array<{ name: string, value: string, [key: string]: any }>} Parsed cookies.
 */
export function parseSetCookie(header: string | string[]): Array<{ name: string, value: string, [key: string]: any }> {
  const headers = Array.isArray(header) ? header : header.split(/,(?=\s*\w+=)/);
  return headers.map(h => {
    const parts = h.split(';').map(p => p.trim());
    const [name, value] = parts[0].split('=');
    const attrs: any = { name, value };
    for (const attr of parts.slice(1)) {
      const [k, v] = attr.split('=');
      attrs[k.toLowerCase()] = v === undefined ? true : v;
    }
    return attrs;
  });
}
