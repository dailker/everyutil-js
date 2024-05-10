/**
 * Obfuscates the last bytes of an IP address (e.g., 192.168.1.**).
 *
 * @author @dailker
 * @param {string} ip - The IP address.
 * @returns {string} The obfuscated IP.
 */
export function obfuscateIP(ip: string): string {
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) {
    return ip.replace(/(\.\d+){1,2}$/, '.**');
  }
  if (/^[a-fA-F0-9:]+$/.test(ip) && ip.includes(':')) {
    return ip.replace(/(:[a-fA-F0-9]+){1,2}$/, ':**');
  }
  return ip;
}
