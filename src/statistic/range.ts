/**
 * Calculates the range (max - min) of an array of numbers.
 *
 * Example: range([1, 2, 3, 4]) → 3
 *
 * @author @dailker
 * @param {number[]} array - Array of numbers.
 * @returns {number} The range.
 */
export function range(array: number[]): number {
  return Math.max(...array) - Math.min(...array);
}
