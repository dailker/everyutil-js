/**
 * Executes predicates in sequence, short-circuiting on first false.
 * @author @dailker
 */
export function sequencePredicates<T>(predicates: Array<(x: T) => boolean>): (x: T) => boolean {
  return (x: T) => predicates.every(fn => fn(x));
}
