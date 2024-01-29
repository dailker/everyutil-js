/**
 * Returns a predicate checking equality to a value.
 * @author @dailker
 */
export function isEqualTo<T>(value: T): (input: T) => boolean {
  return (input: T) => input === value;
}
