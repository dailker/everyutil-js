/**
 * Evaluates fallback only if primary fails (like soft fallback logic).
 * @author @dailker
 */
export function predicateWithFallback<T>(primary: (x: T) => boolean, fallback: (x: T) => boolean): (x: T) => boolean {
  return (x: T) => primary(x) ? true : fallback(x);
}
