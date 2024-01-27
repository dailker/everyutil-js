/**
 * Returns a predicate that passes only if all composed predicates pass sequentially.
 * @author @dailker
 */
export function composePredicates<T extends any[]>(...predicates: Array<(...args: T) => boolean>): (...args: T) => boolean {
  return (...args: T) => predicates.every(fn => fn(...args));
}
