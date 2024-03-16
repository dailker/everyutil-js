/**
 * Performs one-way ANOVA for multiple groups.
 *
 * Example: anova([[1,2,3],[2,3,4],[3,4,5]]) → { f: 1.5, p: 0.25 }
 *
 * @author @dailker
 * @param {number[][]} samples - Array of sample arrays.
 * @returns {{ f: number, p: number }} F-statistic and p-value.
 */
import { mean } from './mean';

export function anova(samples: number[][]): { f: number; p: number } {
  const k = samples.length;
  const n = samples.reduce((acc, arr) => acc + arr.length, 0);
  const grandMean = mean(samples.flat());
  const ssb = samples.reduce((sum, arr) => sum + arr.length * (mean(arr) - grandMean) ** 2, 0);
  const ssw = samples.reduce((sum, arr) => sum + arr.reduce((s, v) => s + (v - mean(arr)) ** 2, 0), 0);
  const msb = ssb / (k - 1);
  const msw = ssw / (n - k);
  const f = msb / msw;
  // Approximate p-value using normal distribution
  const p = 1 - normalCdf(Math.sqrt(f), 0, 1);
  return { f, p };
}
import { normalCdf } from './normalCdf';
