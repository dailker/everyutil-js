/**
 * Snaps a number to the nearest value in a custom set of values.
 * For example, snapToNearest(27, [0, 10, 30, 50]) returns 30.
 * @author @dailker
 * @param {number} n - The input number.
 * @param {number[]} values - The array of possible snap values.
 * @returns {number} The value from values closest to n.
 */
export function snapToNearest(n: number, values: number[]): number {
  return values.reduce((prev, curr) => Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev);
}
