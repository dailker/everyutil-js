/**
 * Whether all boolean values are identical.
 * @author @dailker
 * @param {boolean[]} array - Array of boolean values.
 * @returns {boolean} True if all values are identical, false otherwise.
 */
export function allSame(array: boolean[]): boolean {
  return array.every(v => v === array[0]);
}
