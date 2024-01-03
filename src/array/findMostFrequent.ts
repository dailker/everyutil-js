/**
 * Returns the most frequently occurring element(s) in the array.
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
export function findMostFrequent<T>(array: T[]): T[] {
  const freq = new Map<T, number>();
  let max = 0;
  for (const item of array) {
    const count = (freq.get(item) ?? 0) + 1;
    freq.set(item, count);
    if (count > max) max = count;
  }
  return Array.from(freq.entries())
    .filter(([_, count]) => count === max)
    .map(([item]) => item);
}
