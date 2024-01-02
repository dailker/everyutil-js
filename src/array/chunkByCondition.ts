/**
 * Splits an array into chunks where the provided function returns true for consecutive elements.
 * @author @dailker
 * @template T
 * @param {T[]} array - The input array.
 * @param {(a: T, b: T, idx: number, arr: T[]) => boolean} fn - Condition function, receives current and previous element.
 * @returns {T[][]} - Array of chunks.
 */
export function chunkByCondition<T>(
  array: T[],
  fn: (a: T, b: T, idx: number, arr: T[]) => boolean
): T[][] {
  if (!array.length) return [];
  const result: T[][] = [];
  let chunk: T[] = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (fn(array[i - 1], array[i], i, array)) {
      chunk.push(array[i]);
    } else {
      result.push(chunk);
      chunk = [array[i]];
    }
  }
  result.push(chunk);
  return result;
}
