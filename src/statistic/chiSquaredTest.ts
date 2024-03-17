/**
 * Performs a chi-square goodness of fit test.
 *
 * Example: chiSquaredTest([10, 20], [15, 15]) → { chi2: 1.666, p: 0.197 }
 *
 * @author @dailker
 * @param {number[]} observed - Observed frequencies.
 * @param {number[]} expected - Expected frequencies.
 * @returns {{ chi2: number, p: number }} Chi-square statistic and p-value.
 */
export function chiSquaredTest(observed: number[], expected: number[]): { chi2: number; p: number } {
  const chi2 = observed.reduce((sum, o, i) => sum + ((o - expected[i]) ** 2) / expected[i], 0);
  // Degrees of freedom = categories - 1
  const df = observed.length - 1;
  // Approximate p-value using normal distribution
  const p = 1 - normalCdf(Math.sqrt(chi2), 0, 1);
  return { chi2, p };
}
import { normalCdf } from './normalCdf';
