/**
 * Calculates the variance of an array of numbers.
 *
 * Example: variance([1, 2, 3, 4]) → 1.25
 *
 * @author @dailker
 * @param {number[]} array - Array of numbers.
 * @returns {number} The variance.
 */
export function variance(array: number[]): number {
  const m = mean(array);
  return array.reduce((acc, val) => acc + (val - m) ** 2, 0) / array.length;
}
import { mean } from './mean';
