/**
 * Returns true if at least min conditions are true.
 * @author @dailker
 */
export function thresholdPass(min: number, values: boolean[]): boolean {
  return values.filter(Boolean).length >= min;
}
