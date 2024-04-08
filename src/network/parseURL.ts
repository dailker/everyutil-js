/**
 * Parses a URL string into its components.
 *
 * Example: parseURL("https://example.com:8080/path?foo=bar#hash") → { protocol, host, port, path, query, hash }
 *
 * @author @dailker
 * @param {string} url - The URL string to parse.
 * @returns {object} Parsed URL components.
 */
export function parseURL(url: string): { protocol: string; host: string; port: string; path: string; query: string; hash: string } {
  try {
    const u = new URL(url);
    return {
      protocol: u.protocol.replace(':', ''),
      host: u.hostname,
      port: u.port,
      path: u.pathname,
      query: u.search,
      hash: u.hash
    };
  } catch {
    return { protocol: '', host: '', port: '', path: '', query: '', hash: '' };
  }
}
