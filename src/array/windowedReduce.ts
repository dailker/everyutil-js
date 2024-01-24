/**
 * Applies a reducer function on sliding windows of the array.
 * @author @dailker
 * @template T, U
 * @param {T[]} array - The input array.
 * @param {(acc: U, window: T[], index: number, array: T[]) => U} reducer - The reducer function.
 * @param {U} initialValue - The initial accumulator value.
 * @param {number} windowSize - The size of the sliding window.
 * @returns {U} The reduced value.
 */
export function windowedReduce<T, U>(array: T[], reducer: (acc: U, window: T[], index: number, array: T[]) => U, initialValue: U, windowSize: number): U {
  let acc = initialValue;
  for (let i = 0; i <= array.length - windowSize; i++) {
    acc = reducer(acc, array.slice(i, i + windowSize), i, array);
  }
  return acc;
}
