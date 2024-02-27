/**
 * Converts a boolean or function into a standardized (x) => boolean predicate.
 * @author @dailker
 */
export function normalizePredicate<T>(input: boolean | ((x: T) => boolean)): (x: T) => boolean {
  return typeof input === 'function' ? input : () => !!input;
}
