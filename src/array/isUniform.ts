/**
 * Checks if all elements are equal.
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @returns {boolean}
 */
export function isUniform<T>(array: T[]): boolean {
  if (array.length === 0) return true;
  const first = array[0];
  return array.every(item => item === first);
}
