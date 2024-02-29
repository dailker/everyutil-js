/**
 * Combines multiple predicates into one using logical OR.
 * @author @dailker
 * @param {Function[]} predicates - Array of predicate functions.
 * @returns {Function} A predicate that returns true if any predicate returns true.
 */
export function disjoin<T extends any[]>(...predicates: Array<(...args: T) => boolean>): (...args: T) => boolean {
  return (...args: T) => predicates.some(fn => fn(...args));
}
