/**
 * Converts a string to its binary representation (8 bits per character).
 *
 * Example: binaryEncode("A") → "01000001"
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string} The binary-encoded string.
 */
export function binaryEncode(str: string): string {
  return str.split('').map(c =>
    c.charCodeAt(0).toString(2).padStart(8, '0')
  ).join('');
}
