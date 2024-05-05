/**
 * Determines if an address is IPv4 or IPv6.
 *
 * @author @dailker
 * @param {string} ip - The IP address.
 * @returns {'ipv4' | 'ipv6' | 'invalid'} The version or 'invalid'.
 */
export function getIPVersion(ip: string): 'ipv4' | 'ipv6' | 'invalid' {
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) return 'ipv4';
  if (/^[a-fA-F0-9:]+$/.test(ip) && ip.includes(':')) return 'ipv6';
  return 'invalid';
}
