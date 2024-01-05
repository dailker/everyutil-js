/**
 * Mixes arrays in a round-robin pattern.
 * @author @dailker
 * @template T
 * @param {...T[][]} arrays
 * @returns {T[]}
 */
export function interleave<T>(...arrays: T[][]): T[] {
  const maxLen = Math.max(...arrays.map(arr => arr.length));
  const result: T[] = [];
  for (let i = 0; i < maxLen; i++) {
    for (const arr of arrays) {
      if (i < arr.length) result.push(arr[i]);
    }
  }
  return result;
}
