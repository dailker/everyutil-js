/**
 * Exclusive OR across predicates: true if exactly one predicate returns true.
 * @author @dailker
 */
export function xorPredicates<T extends any[]>(...predicates: Array<(...args: T) => boolean>): (...args: T) => boolean {
  return (...args: T) => predicates.filter(fn => fn(...args)).length === 1;
}
