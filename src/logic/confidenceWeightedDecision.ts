/**
 * More nuanced than just true/false: confidence-weighted decision.
 * @author @dailker
 */
export function confidenceWeightedDecision(confidences: number[], values: boolean[]): boolean {
  let sum = 0, total = 0;
  for (let i = 0; i < confidences.length; i++) {
    sum += (values[i] ? confidences[i] : 0);
    total += confidences[i];
  }
  return sum > total / 2;
}
