/**
 * Combines multiple predicates into one using logical AND.
 * @author @dailker
 * @param predicates - Array of predicate functions.
 * @returns A predicate that returns true if all predicates return true.
 */
export function conjoin<T extends any[]>(...predicates: Array<(...args: T) => boolean>): (...args: T) => boolean {
  return (...args: T) => predicates.every(fn => fn(...args));
}
