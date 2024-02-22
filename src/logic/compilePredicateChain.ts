/**
 * Supports dynamic rules via strings or custom functions.
 * @author @dailker
 */
export function compilePredicateChain<T>(predicates: Array<string | ((x: T) => boolean)>): (x: T) => boolean {
  return (x: T) => predicates.every(p => typeof p === 'function' ? p(x) : Boolean((x as any)[p]));
}
