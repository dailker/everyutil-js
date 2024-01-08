/**
 * Keeps tailing elements until predicate returns false.
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @param {(item: T, idx: number, arr: T[]) => boolean} predicate
 * @returns {T[]}
 */
export function tailUntil<T>(array: T[], predicate: (item: T, idx: number, arr: T[]) => boolean): T[] {
  const result: T[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (!predicate(array[i], i, array)) break;
    result.unshift(array[i]);
  }
  return result;
}
