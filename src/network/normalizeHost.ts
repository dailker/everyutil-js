/**
 * Normalizes a host or URL to hostname:port.
 *
 * Example: normalizeHost('http://a.com:80/path') → 'a.com:80'
 *
 * @author @dailker
 * @param {string} input - Host or URL.
 * @returns {string|null} Normalized host:port or null if invalid.
 */
export function normalizeHost(input: string): string | null {
  try {
    const u = new URL(input, 'http://x');
    return u.hostname + (u.port ? ':' + u.port : '');
  } catch {
    return null;
  }
}
