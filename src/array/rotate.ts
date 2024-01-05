/**
 * Rotates the array (circular shift).
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @param {number} positions
 * @returns {T[]}
 */
export function rotate<T>(array: T[], positions: number): T[] {
  const len = array.length;
  if (!len) return [];
  const n = ((positions % len) + len) % len;
  return array.slice(-n).concat(array.slice(0, -n));
}
