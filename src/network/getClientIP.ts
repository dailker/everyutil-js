/**
 * Attempts to determine the client IP address from headers.
 *
 * @author @dailker
 * @param {Record<string, string | string[]>} headers - HTTP headers.
 * @returns {string | null} The client IP or null.
 */
export function getClientIP(headers: Record<string, string | string[]>): string | null {
  const candidates = [
    'x-forwarded-for',
    'x-real-ip',
    'cf-connecting-ip',
    'fastly-client-ip',
    'true-client-ip',
    'x-client-ip',
    'x-forwarded',
    'forwarded-for',
    'forwarded',
    'remote-addr'
  ];
  for (const key of candidates) {
    const val = headers[key] || headers[key.toLowerCase()];
    if (val) {
      const ip = Array.isArray(val) ? val[0] : val;
      return ip.split(',')[0].trim();
    }
  }
  return null;
}
