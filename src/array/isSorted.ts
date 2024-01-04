/**
 * Verifies if the array is sorted.
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @param {'asc'|'desc'} [order='asc']
 * @returns {boolean}
 */
export function isSorted<T>(array: T[], order: 'asc' | 'desc' = 'asc'): boolean {
  for (let i = 1; i < array.length; i++) {
    if (order === 'asc' && array[i - 1] > array[i]) return false;
    if (order === 'desc' && array[i - 1] < array[i]) return false;
  }
  return true;
}
