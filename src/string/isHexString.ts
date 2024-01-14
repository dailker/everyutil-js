/**
 * Checks if a string is a valid hex color or byte string.
 *
 * Examples:
 *   isHexString("#FF00AA") → true
 *   isHexString("0xA9B4") → true
 *   isHexString("hello") → false
 *
 * @author @dailker
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a valid hex string, false otherwise.
 */
export function isHexString(str: string): boolean {
  return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(str) ||
    /^0x[a-fA-F0-9]+$/.test(str);
}
