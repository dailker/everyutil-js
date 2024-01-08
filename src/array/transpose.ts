/**
 * Matrix transpose.
 * @author @dailker
 * @template T
 * @param {T[][]} arrayOfArrays
 * @returns {T[][]}
 */
export function transpose<T>(arrayOfArrays: T[][]): T[][] {
  if (!arrayOfArrays.length) return [];
  const maxLen = Math.max(...arrayOfArrays.map(arr => arr.length));
  return Array.from({ length: maxLen }, (_, i) =>
    arrayOfArrays.map(arr => arr[i])
  );
}
