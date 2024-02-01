/**
 * Executes a function only if a predicate passes.
 * @author @dailker
 */
export function runIf<T>(predicate: (input: T) => boolean, fn: (input: T) => void): (input: T) => void {
  return (input: T) => {
    if (predicate(input)) fn(input);
  };
}
