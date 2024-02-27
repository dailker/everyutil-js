/**
 * Returns true with specified probability (e.g. 0.7 → 70% chance).
 * @author @dailker
 */
export function randomBool(probability = 0.5): boolean {
  return Math.random() < probability;
}
