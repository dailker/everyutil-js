/**
 * Calculates the quartiles (Q1, Q2, Q3) of an array of numbers.
 *
 * Example: quartiles([1, 2, 3, 4, 5]) → { q1: 2, q2: 3, q3: 4 }
 *
 * @author @dailker
 * @param {number[]} array - Array of numbers.
 * @returns {{ q1: number, q2: number, q3: number }} Quartile values.
 */
import { median } from './median';

export function quartiles(array: number[]): { q1: number; q2: number; q3: number } {
  const sorted = [...array].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const q2 = median(sorted);
  const q1 = median(sorted.slice(0, mid));
  const q3 = median(sorted.slice(sorted.length % 2 === 0 ? mid : mid + 1));
  return { q1, q2, q3 };
}
