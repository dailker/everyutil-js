/**
 * Returns a predicate that passes if any predicate passes.
 * @author @dailker
 * @param preds - Array of predicate functions.
 * @returns A predicate that returns true if any predicate passes.
 */
export function anyPass<T>(...preds: Array<(x: T) => boolean>): (x: T) => boolean {
  return (x: T) => preds.some(fn => fn(x));
}
