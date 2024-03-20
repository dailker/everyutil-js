/**
 * Calculates the normal (Gaussian) probability density function.
 *
 * Example: normalPdf(0, 0, 1) → 0.3989
 *
 * @author @dailker
 * @param {number} x - Value to evaluate.
 * @param {number} mean - Mean of the distribution.
 * @param {number} stdDev - Standard deviation.
 * @returns {number} Probability density.
 */
export function normalPdf(x: number, mean: number, stdDev: number): number {
  return (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mean) / stdDev) ** 2);
}
