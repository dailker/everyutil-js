/**
 * Returns a predicate checking if value is in the given list.
 * @author @dailker
 */
export function isOneOf<T>(values: T[]): (input: T) => boolean {
  return (input: T) => values.includes(input);
}
