/**
 * Calculates the standard deviation of an array of numbers.
 *
 * Example: standardDeviation([1, 2, 3, 4]) → 1.118
 *
 * @author @dailker
 * @param {number[]} array - Array of numbers.
 * @returns {number} The standard deviation.
 */
import { variance } from './variance';

export function standardDeviation(array: number[]): number {
  return Math.sqrt(variance(array));
}
