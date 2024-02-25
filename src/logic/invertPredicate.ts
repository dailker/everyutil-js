/**
 * Like negate, but for predicate functions with multiple arguments.
 * @author @dailker
 */
export function invertPredicate<T extends any[]>(fn: (...args: T) => boolean): (...args: T) => boolean {
  return (...args: T) => !fn(...args);
}
