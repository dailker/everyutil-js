/**
 * Generates the nth Bernoulli number (B_n).
 * @author @dailker
 * @param {number} n - The index.
 * @returns {number} The nth Bernoulli number.
 */
export function bernoulliNumber(n: number): number {
  if (n === 0) return 1;
  if (n === 1) return -0.5;
  if (n % 2 === 1 && n > 1) return 0;
  const A = new Array(n + 1).fill(0);
  for (let m = 0; m <= n; m++) {
    A[m] = 1 / (m + 1);
    for (let j = m; j >= 1; j--) {
      A[j - 1] = j * (A[j - 1] - A[j]);
    }
  }
  return A[0];
}
