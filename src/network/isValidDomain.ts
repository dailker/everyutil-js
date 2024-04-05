/**
 * Validates if a string is a valid domain name.
 *
 * Example: isValidDomain("example.com") → true
 *
 * @author @dailker
 * @param {string} domain - The domain string.
 * @returns {boolean} True if valid domain.
 */
export function isValidDomain(domain: string): boolean {
  return /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.[A-Za-z]{2,}$/.test(domain);
}
