/**
 * Flips true at a rate matching entropy in signal (e.g. [0–1] noise scale).
 * @author @dailker
 */
export function booleanByEntropy(entropy: number): boolean {
  return Math.random() < entropy;
}
