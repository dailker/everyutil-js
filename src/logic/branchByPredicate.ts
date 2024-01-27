/**
 * Runs different functions based on predicates.
 * @author @dailker
 */
export function branchByPredicate<T, R>(branches: Array<[(input: T) => boolean, (input: T) => R]>, defaultFn: (input: T) => R): (input: T) => R {
  return (input: T) => {
    for (const [predicate, fn] of branches) {
      if (predicate(input)) return fn(input);
    }
    return defaultFn(input);
  };
}
