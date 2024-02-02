/**
 * Weight + score evaluation of multiple boolean flags.
 * @author @dailker
 */
export function scoreConditions(weights: number[], conditions: boolean[]): number {
  return conditions.reduce((sum, cond, i) => sum + (cond ? (weights[i] || 0) : 0), 0);
}
