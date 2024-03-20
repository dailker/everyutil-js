/**
 * Calculates the Poisson probability mass function.
 *
 * Example: poissonPdf(3, 2) → 0.1804
 *
 * @author @dailker
 * @param {number} k - Number of occurrences.
 * @param {number} lambda - Expected rate (mean).
 * @returns {number} Probability.
 */
function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

export function poissonPdf(k: number, lambda: number): number {
  return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
}
