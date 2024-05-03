/**
 * Promise-based DNS resolver (Node.js only).
 *
 * Example: dnsLookupPromise('example.com')
 *
 * @author @dailker
 * @param {string} host - Hostname to resolve.
 * @returns {Promise<string[]>} Array of IP addresses.
 */
export async function dnsLookupPromise(host: string): Promise<string[]> {
  const dns = await import('dns').then(m => m.promises);
  const res = await dns.lookup(host, { all: true });
  return res.map((r: any) => r.address);
}
