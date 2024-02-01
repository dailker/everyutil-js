/**
 * Like Array.every but for predicates over a single input.
 * @author @dailker
 */
export function predicateAll<T>(predicates: Array<(input: T) => boolean>): (input: T) => boolean {
  return (input: T) => predicates.every(fn => fn(input));
}
