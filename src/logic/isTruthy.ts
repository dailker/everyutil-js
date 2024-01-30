/**
 * Truthiness checker with stricter rules (not null, undefined, false, 0, '', NaN).
 * @author @dailker
 */
export function isTruthy(val: any): boolean {
  return !!val;
}
