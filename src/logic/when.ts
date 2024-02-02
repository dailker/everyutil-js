/**
 * Conditionally apply a transformation function.
 * @author @dailker
 */
export function when<T>(predicate: (input: T) => boolean, transform: (input: T) => T): (input: T) => T {
  return (input: T) => predicate(input) ? transform(input) : input;
}
