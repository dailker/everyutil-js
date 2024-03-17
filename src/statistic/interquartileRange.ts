/**
 * Calculates the interquartile range (IQR) of an array of numbers.
 *
 * Example: interquartileRange([1, 2, 3, 4, 5]) → 2
 *
 * @author @dailker
 * @param {number[]} array - Array of numbers.
 * @returns {number} The IQR value.
 */
import { quartiles } from './quartiles';

export function interquartileRange(array: number[]): number {
  const { q1, q3 } = quartiles(array);
  return q3 - q1;
}
