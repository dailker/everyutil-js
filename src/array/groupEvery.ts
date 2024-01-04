/**
 * Groups every n items, dropping extras.
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @param {number} count
 * @returns {T[][]}
 */
export function groupEvery<T>(array: T[], count: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i + count <= array.length; i += count) {
    result.push(array.slice(i, i + count));
  }
  return result;
}
