/**
 * Transforms [a,b,c] → [{index: 0, value: a}, ...]
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @returns {{index: number, value: T}[]}
 */
export function withIndex<T>(array: T[]): { index: number; value: T }[] {
  return array.map((value, index) => ({ index, value }));
}
