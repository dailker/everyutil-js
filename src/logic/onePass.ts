/**
 * True if exactly one passes.
 * @author @dailker
 * @param preds - Array of predicate functions.
 * @returns A predicate that returns true if exactly one passes.
 */
export function onePass<T>(...preds: Array<(x: T) => boolean>): (x: T) => boolean {
  return (x: T) => preds.filter(fn => fn(x)).length === 1;
}
