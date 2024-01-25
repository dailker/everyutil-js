/**
 * Linear interpolation between two numbers.
 * @author @dailker
 * @param {number} a - Start value.
 * @param {number} b - End value.
 * @param {number} t - Interpolation factor [0, 1].
 * @returns {number}
 */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
