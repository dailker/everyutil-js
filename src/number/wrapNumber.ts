/**
 * Wraps a number in a circular range [min, max].
 * For example, wrapNumber(11, 0, 10) returns 1.
 * @author @dailker
 * @param {number} n - The input number to wrap.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} The wrapped number within the range [min, max].
 */
export function wrapNumber(n: number, min: number, max: number): number {
  const range = max - min + 1;
  return ((n - min) % range + range) % range + min;
}
