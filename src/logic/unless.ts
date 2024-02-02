/**
 * Conditionally apply a transformation function if predicate is false.
 * @author @dailker
 */
export function unless<T>(predicate: (input: T) => boolean, transform: (input: T) => T): (input: T) => T {
  return (input: T) => !predicate(input) ? transform(input) : input;
}
