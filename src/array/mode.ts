/**
 * Finds the mode(s) in a numeric array.
 * @author @dailker
 * @param {number[]} array
 * @returns {number[]}
 */
export function mode(array: number[]): number[] {
  const freq = new Map<number, number>();
  let max = 0;
  for (const n of array) {
    const count = (freq.get(n) ?? 0) + 1;
    freq.set(n, count);
    if (count > max) max = count;
  }
  return Array.from(freq.entries())
    .filter(([_, count]) => count === max)
    .map(([n]) => n);
}
