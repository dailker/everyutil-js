/**
 * Returns true only if none pass.
 * @author @dailker
 * @param preds - Array of predicate functions.
 * @returns A predicate that returns true only if none pass.
 */
export function nonePass<T>(...preds: Array<(x: T) => boolean>): (x: T) => boolean {
  return (x: T) => !preds.some(fn => fn(x));
}
