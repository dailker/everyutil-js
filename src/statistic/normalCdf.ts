/**
 * Calculates the normal (Gaussian) cumulative distribution function.
 *
 * Example: normalCdf(0, 0, 1) → 0.5
 *
 * @author @dailker
 * @param {number} x - Value to evaluate.
 * @param {number} mean - Mean of the distribution.
 * @param {number} stdDev - Standard deviation.
 * @returns {number} Cumulative probability.
 */
export function normalCdf(x: number, mean: number, stdDev: number): number {
  return 0.5 * (1 + erf((x - mean) / (stdDev * Math.sqrt(2))));
}

// Approximation of the error function
function erf(x: number): number {
  // Abramowitz and Stegun formula 7.1.26
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y;
}
