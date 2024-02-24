/**
 * Converts a confidence score (0–1) to boolean with margin.
 * @author @dailker
 */
export function fuzzyBool(value: number, threshold: number = 0.5): boolean {
  return value >= threshold;
}
