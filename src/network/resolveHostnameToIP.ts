/**
 * Resolves a hostname to an IP address (works in Node.js and browser).
 *
 * @author @dailker
 * @param {string} hostname - The hostname to resolve.
 * @returns {Promise<string | null>} The resolved IP or null.
 */
export async function resolveHostnameToIP(hostname: string): Promise<string | null> {
  if (typeof window === 'undefined') {
    // Node.js
    const { promises: dns } = await import('dns');
    try {
      const [addr] = await dns.lookup(hostname, { all: true });
      return addr.address;
    } catch {
      return null;
    }
  } else {
    // Browser: use a public DNS API
    try {
      const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(hostname)}&type=A`);
      const data = await res.json();
      return data.Answer?.[0]?.data || null;
    } catch {
      return null;
    }
  }
}
