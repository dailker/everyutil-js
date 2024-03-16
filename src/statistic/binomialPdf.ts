/**
 * Calculates the binomial probability mass function.
 *
 * Example: binomialPdf(2, 5, 0.5) → 0.3125
 *
 * @author @dailker
 * @param {number} k - Number of successes.
 * @param {number} n - Number of trials.
 * @param {number} p - Probability of success.
 * @returns {number} Probability.
 */
function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

export function binomialPdf(k: number, n: number, p: number): number {
  const comb = factorial(n) / (factorial(k) * factorial(n - k));
  return comb * Math.pow(p, k) * Math.pow(1 - p, n - k);
}
