/**
 * Checks if an IP address is in a private range (RFC1918).
 *
 * @author @dailker
 * @param {string} ip - The IP address to check.
 * @returns {boolean} True if private, false otherwise.
 */
export function isPrivateIP(ip: string): boolean {
  // IPv4 private ranges
  if (/^(10|192\.168|172\.(1[6-9]|2[0-9]|3[01]))\./.test(ip)) return true;
  // IPv6 unique local addresses (fc00::/7)
  if (/^fc[0-9a-f]{2}|fd[0-9a-f]{2}/i.test(ip.replace(/:/g, ''))) return true;
  return false;
}
