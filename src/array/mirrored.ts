/**
 * Checks if the array is symmetrical/mirrored.
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @returns {boolean}
 */
export function mirrored<T>(array: T[]): boolean {
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    if (array[i] !== array[j]) return false;
  }
  return true;
}
