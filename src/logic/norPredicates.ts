/**
 * Logical NOR over predicates.
 * @author @dailker
 */
export function norPredicates<T extends any[]>(...predicates: Array<(...args: T) => boolean>): (...args: T) => boolean {
  return (...args: T) => !predicates.some(fn => fn(...args));
}
