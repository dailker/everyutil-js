/**
 * Checks if a number is a triangular number (1, 3, 6, 10, ...).
 * @author @dailker
 * @param {number} n - The number to check.
 * @returns {boolean} True if n is triangular, false otherwise.
 */
export function isTriangularNumber(n: number): boolean {
  const x = (-1 + Math.sqrt(1 + 8 * n)) / 2;
  return Number.isInteger(x);
}
