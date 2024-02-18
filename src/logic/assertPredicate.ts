/**
 * Throws if predicate is false.
 * @author @dailker
 */
export function assertPredicate(predicate: () => boolean, errorMessage?: string): void {
  if (!predicate()) throw new Error(errorMessage || 'Predicate failed');
}
