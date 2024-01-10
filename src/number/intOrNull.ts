/**
 * Returns the integer if n is an integer, otherwise returns null.
 * @author @dailker
 * @param {number} n - The number to check.
 * @returns {number|null} The integer value or null.
 */
export function intOrNull(n: number): number | null {
  return Number.isInteger(n) ? n : null;
}
