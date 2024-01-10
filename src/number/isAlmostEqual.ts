/**
 * Checks if two numbers are almost equal, within a given epsilon.
 * Useful for floating point comparisons.
 * @author @dailker
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} [epsilon=1e-10] - The allowed difference.
 * @returns {boolean} True if the numbers are almost equal, false otherwise.
 */
export function isAlmostEqual(a: number, b: number, epsilon = 1e-10): boolean {
  return Math.abs(a - b) <= epsilon;
}
