/**
 * Functional ternary operator: evaluates thenFn or elseFn based on predicate.
 * @author @dailker
 */
export function guard<T, R>(predicate: (x: T) => boolean, thenFn: (x: T) => R, elseFn?: (x: T) => R): (x: T) => R {
  return (x: T) => predicate(x) ? thenFn(x) : elseFn ? elseFn(x) : undefined as any;
}
