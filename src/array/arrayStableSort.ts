/**
 * Stable sort for arrays (guarantees order of equal elements).
 * @author @dailker
 * @template T
 * @param {T[]} array - The array to sort.
 * @param {(a: T, b: T) => number} compareFn - Comparison function.
 * @returns {T[]} Sorted array.
 */
export function arrayStableSort<T>(array: T[], compareFn: (a: T, b: T) => number): T[] {
  return array
    .map((item, idx) => ({item, idx}))
    .sort((a, b) => {
      const cmp = compareFn(a.item, b.item);
      return cmp !== 0 ? cmp : a.idx - b.idx;
    })
    .map(({item}) => item);
}
