/**
 * Calculates the Pearson correlation coefficient between two arrays.
 *
 * Example: pearsonCorrelation([1,2,3], [2,3,4]) → 1
 *
 * @author @dailker
 * @param {number[]} x - First array.
 * @param {number[]} y - Second array.
 * @returns {number} Correlation coefficient.
 */
export function pearsonCorrelation(x: number[], y: number[]): number {
  const n = x.length;
  const mx = x.reduce((a, b) => a + b, 0) / n;
  const my = y.reduce((a, b) => a + b, 0) / n;
  let num = 0, den1 = 0, den2 = 0;
  for (let i = 0; i < n; i++) {
    num += (x[i] - mx) * (y[i] - my);
    den1 += (x[i] - mx) ** 2;
    den2 += (y[i] - my) ** 2;
  }
  return num / Math.sqrt(den1 * den2);
}
