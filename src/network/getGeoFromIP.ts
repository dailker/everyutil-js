/**
 * Gets geo-location info for an IP using a pluggable API.
 *
 * @author @dailker
 * @param {string} ip - The IP address.
 * @param {(ip: string) => Promise<any>} [api] - Optional custom API function.
 * @returns {Promise<any>} The geo info.
 */
export async function getGeoFromIP(ip: string, api?: (ip: string) => Promise<any>): Promise<any> {
  if (api) return api(ip);
  // Default: ip-api.com
  const res = await fetch(`https://ip-api.com/json/${encodeURIComponent(ip)}`);
  return res.json();
}
