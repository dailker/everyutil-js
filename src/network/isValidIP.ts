/**
 * Validates if a string is a valid IPv4 or IPv6 address.
 *
 * Example: isValidIP("127.0.0.1") → true
 *
 * @author @dailker
 * @param {string} ip - The IP address string.
 * @returns {boolean} True if valid IP.
 */
export function isValidIP(ip: string): boolean {
  // IPv4
  if (/^(\d{1,3}\.){3}\d{1,3}$/.test(ip)) {
    return ip.split('.').every(octet => +octet >= 0 && +octet <= 255);
  }
  // IPv6
  if (/^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(ip)) {
    return true;
  }
  return false;
}
