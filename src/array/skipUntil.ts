/**
 * Skips until predicate returns true, returns the rest.
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @param {(item: T, idx: number, arr: T[]) => boolean} predicate
 * @returns {T[]}
 */
export function skipUntil<T>(array: T[], predicate: (item: T, idx: number, arr: T[]) => boolean): T[] {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return array.slice(i);
    }
  }
  return [];
}
