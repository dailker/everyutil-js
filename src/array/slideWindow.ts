/**
 * Sliding window with overlap.
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @param {number} size
 * @param {number} [step=1]
 * @returns {T[][]}
 */
export function slideWindow<T>(array: T[], size: number, step = 1): T[][] {
  const result: T[][] = [];
  for (let i = 0; i + size <= array.length; i += step) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
