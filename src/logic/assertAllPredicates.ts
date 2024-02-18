/**
 * Throws an error if any predicate fails.
 * @author @dailker
 * @param {T} value - The value to test.
 * @param {Function[]} preds - Array of predicate functions.
 * @returns {void}
 */
export function assertAllPredicates<T>(value: T, preds: Array<(x: T) => boolean>): void {
  for (const fn of preds) if (!fn(value)) throw new Error('Predicate failed');
}
