/**
 * Checks if an IP address is a loopback address (127.0.0.1, ::1, etc).
 *
 * @author @dailker
 * @param {string} ip - The IP address to check.
 * @returns {boolean} True if loopback, false otherwise.
 */
export function isLoopbackAddress(ip: string): boolean {
  return ip === '127.0.0.1' || ip === '::1' || /^127\./.test(ip);
}
