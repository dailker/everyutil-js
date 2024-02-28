/**
 * Ensures a function returns a boolean, coercing unexpected return values.
 * @author @dailker
 */
export function sanitizePredicate(fn: any): (...args: any[]) => boolean {
  return (...args: any[]) => !!fn(...args);
}
