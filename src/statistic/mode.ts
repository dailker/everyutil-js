/**
 * Calculates the mode(s) of an array of numbers.
 *
 * Example: mode([1, 2, 2, 3]) → [2]
 *
 * @author @dailker
 * @param {number[]} array - Array of numbers.
 * @returns {number[]} The mode value(s).
 */
export function mode(array: number[]): number[] {
  const freq: Record<number, number> = {};
  array.forEach(n => (freq[n] = (freq[n] || 0) + 1));
  const max = Math.max(...Object.values(freq));
  return Object.keys(freq)
    .filter(k => freq[+k] === max)
    .map(Number);
}
