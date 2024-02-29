/**
 * Returns the logical negation of a predicate function.
 * @author @dailker
 * @param predicate - The predicate function to negate.
 * @returns A new predicate that returns the negation of the original.
 */
export function negate<T extends any[]>(predicate: (...args: T) => boolean): (...args: T) => boolean {
  return (...args: T) => !predicate(...args);
}
