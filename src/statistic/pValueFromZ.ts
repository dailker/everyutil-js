/**
 * Calculates the p-value from a Z-score.
 *
 * Example: pValueFromZ(1.96) → 0.05
 *
 * @author @dailker
 * @param {number} zScore - Z-score value.
 * @returns {number} P-value.
 */
import { normalCdf } from './normalCdf';

export function pValueFromZ(zScore: number): number {
  return 2 * (1 - normalCdf(Math.abs(zScore), 0, 1));
}
