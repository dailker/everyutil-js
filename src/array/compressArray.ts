/**
 * Compresses array using run-length encoding.
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @returns {[T, number][]}
 */
export function compressArray<T>(array: T[]): [T, number][] {
  if (!array.length) return [];
  const result: [T, number][] = [];
  let prev = array[0], count = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] === prev) {
      count++;
    } else {
      result.push([prev, count]);
      prev = array[i];
      count = 1;
    }
  }
  result.push([prev, count]);
  return result;
}
