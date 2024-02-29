/**
 * Wraps a predicate in try/catch, returns false on exception.
 * @author @dailker
 */
export function safePredicate(fn: any): (...args: any[]) => boolean {
  return (...args: any[]) => {
    try { return !!fn(...args); } catch { return false; }
  };
}
