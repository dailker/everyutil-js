/**
 * Creates a function that runs one of two paths based on a predicate.
 * @author @dailker
 */
export function ifElse<T, R>(predicate: (input: T) => boolean, ifFn: (input: T) => R, elseFn: (input: T) => R): (input: T) => R {
  return (input: T) => predicate(input) ? ifFn(input) : elseFn(input);
}
