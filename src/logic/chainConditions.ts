/**
 * Runs the first function where its predicate passes, like functional if/else if.
 * @author @dailker
 */
export function chainConditions<T, R>(pairs: Array<[(input: T) => boolean, (input: T) => R]>, defaultFn: (input: T) => R): (input: T) => R {
  return (input: T) => {
    for (const [predicate, fn] of pairs) {
      if (predicate(input)) return fn(input);
    }
    return defaultFn(input);
  };
}
