/**
 * Divides a by b, returning a fallback value if b is zero.
 * @author @dailker
 * @param {number} a - The numerator.
 * @param {number} b - The denominator.
 * @param {number} [fallback=0] - The value to return if b is zero.
 * @returns {number} The result of a / b, or fallback if b is zero.
 */
export function safeDivide(a: number, b: number, fallback = 0): number {
  return b === 0 ? fallback : a / b;
}
