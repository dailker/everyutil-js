/**
 * Falsiness checker with stricter rules (null, undefined, false, 0, '', NaN).
 * @author @dailker
 */
export function isFalsy(val: any): boolean {
  return !val;
}
