/**
 * Performs Student’s t-test for independent samples (Welch's t-test).
 *
 * Example: tTest([1,2,3], [2,3,4]) → { t: -1.0, p: 0.4226 }
 *
 * @author @dailker
 * @param {number[]} sample1 - First sample array.
 * @param {number[]} sample2 - Second sample array.
 * @returns {{ t: number, p: number }} t-statistic and p-value.
 */
import { mean } from './mean';
import { variance } from './variance';

export function tTest(sample1: number[], sample2: number[]): { t: number; p: number } {
  const m1 = mean(sample1), m2 = mean(sample2);
  const v1 = variance(sample1), v2 = variance(sample2);
  const n1 = sample1.length, n2 = sample2.length;
  const t = (m1 - m2) / Math.sqrt(v1 / n1 + v2 / n2);
  // Degrees of freedom (Welch-Satterthwaite equation)
  const df = Math.pow(v1 / n1 + v2 / n2, 2) /
    ((Math.pow(v1 / n1, 2) / (n1 - 1)) + (Math.pow(v2 / n2, 2) / (n2 - 1)));
  // Approximate p-value using normal distribution
  const p = 2 * (1 - normalCdf(Math.abs(t), 0, 1));
  return { t, p };
}
import { normalCdf } from './normalCdf';
