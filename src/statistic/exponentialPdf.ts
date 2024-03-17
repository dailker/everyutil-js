/**
 * Calculates the exponential probability density function.
 *
 * Example: exponentialPdf(1, 2) → 0.7358
 *
 * @author @dailker
 * @param {number} x - Value to evaluate.
 * @param {number} lambda - Rate parameter.
 * @returns {number} Probability density.
 */
export function exponentialPdf(x: number, lambda: number): number {
  return x < 0 ? 0 : lambda * Math.exp(-lambda * x);
}
