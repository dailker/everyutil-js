/**
 * Returns a predicate that passes only if all given predicates pass.
 * @author @dailker
 * @param preds - Array of predicate functions.
 * @returns A predicate that returns true if all predicates pass.
 */
export function allPass<T>(...preds: Array<(x: T) => boolean>): (x: T) => boolean {
  return (x: T) => preds.every(fn => fn(x));
}
