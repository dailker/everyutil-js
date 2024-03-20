/**
 * Calculates the Spearman rank correlation coefficient.
 *
 * Example: spearmanCorrelation([1,2,3], [2,3,4]) → 1
 *
 * @author @dailker
 * @param {number[]} x - First array.
 * @param {number[]} y - Second array.
 * @returns {number} Spearman correlation coefficient.
 */
function rank(arr: number[]): number[] {
  return arr.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]).map(([, i], r) => [i, r]).sort((a, b) => a[0] - b[0]).map(([, r]) => r + 1);
}

export function spearmanCorrelation(x: number[], y: number[]): number {
  const rx = rank(x);
  const ry = rank(y);
  const n = x.length;
  const d2 = rx.reduce((sum, r, i) => sum + (r - ry[i]) ** 2, 0);
  return 1 - (6 * d2) / (n * (n ** 2 - 1));
}
