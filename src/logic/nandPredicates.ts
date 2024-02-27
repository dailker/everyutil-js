/**
 * Logical NAND over predicates.
 * @author @dailker
 */
export function nandPredicates<T extends any[]>(...predicates: Array<(...args: T) => boolean>): (...args: T) => boolean {
  return (...args: T) => !predicates.every(fn => fn(...args));
}
