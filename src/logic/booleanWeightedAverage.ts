/**
 * Probabilistic decision blending.
 * @author @dailker
 */
export function booleanWeightedAverage(predResults: boolean[], weights: number[]): number {
  let sum = 0, total = 0;
  for (let i = 0; i < predResults.length; i++) {
    sum += (predResults[i] ? weights[i] : 0);
    total += weights[i];
  }
  return total ? sum / total : 0;
}
