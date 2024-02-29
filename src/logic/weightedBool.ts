/**
 * Maps a weight (e.g. from ML confidence) into a boolean with threshold cutoff.
 * @author @dailker
 */
export function weightedBool(weight: number, threshold = 0.5): boolean {
  return weight >= threshold;
}
