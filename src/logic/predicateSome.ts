/**
 * Like Array.some but for predicates over a single input.
 * @author @dailker
 */
export function predicateSome<T>(predicates: Array<(input: T) => boolean>): (input: T) => boolean {
  return (input: T) => predicates.some(fn => fn(input));
}
