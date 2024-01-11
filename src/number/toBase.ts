/**
 * Converts a number to a string in the given base.
 * For example, toBase(255, 16) returns 'FF'.
 * @author @dailker
 * @param {number} n - The number to convert.
 * @param {number} base - The base to convert to (e.g., 2, 8, 10, 16).
 * @returns {string} The string representation of the number in the given base.
 */
export function toBase(n: number, base: number): string {
  return n.toString(base).toUpperCase();
}
