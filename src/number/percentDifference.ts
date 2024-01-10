/**
 * Calculates the percent difference between two numbers.
 * For example, percentDifference(100, 80) returns -20.
 * @author @dailker
 * @param {number} a - The original value.
 * @param {number} b - The new value.
 * @returns {number} The percent difference from a to b.
 */
export function percentDifference(a: number, b: number): number {
  return ((b - a) / a) * 100;
}
