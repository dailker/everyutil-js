/**
 * Returns true based on chance (e.g. 0.3 → 30% chance).
 * @author @dailker
 */
export function boolByProbability(p: number): boolean {
  return Math.random() < p;
}
