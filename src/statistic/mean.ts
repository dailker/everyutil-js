/**
 * Calculates the mean (average) of an array of numbers.
 *
 * Example: mean([1, 2, 3, 4]) → 2.5
 *
 * @author @dailker
 * @param {number[]} array - Array of numbers.
 * @returns {number} The mean value.
 */
export function mean(array: number[]): number {
  return array.reduce((a, b) => a + b, 0) / array.length;
}
