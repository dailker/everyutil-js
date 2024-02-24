/**
 * Produces a matrix of predicate(input) booleans for all combinations.
 * @author @dailker
 */
export function generatePredicateMatrix(predicates: Array<(x: any) => boolean>, inputs: Array<any>): boolean[][] {
  return predicates.map(fn => inputs.map(input => fn(input)));
}
