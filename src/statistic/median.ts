/**
 * Calculates the median (middle value) of an array of numbers.
 *
 * Example: median([1, 2, 3, 4]) → 2.5
 *
 * @author @dailker
 * @param {number[]} array - Array of numbers.
 * @returns {number} The median value.
 */
export function median(array: number[]): number {
  const sorted = [...array].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}
