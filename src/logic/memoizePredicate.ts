/**
 * Caches predicate results by input for performance-sensitive conditions.
 * @author @dailker
 */
export function memoizePredicate<T, R extends boolean>(fn: (x: T) => R): (x: T) => R {
  const cache = new Map<any, R>();
  return (x: T) => {
    if (cache.has(x)) return cache.get(x)!;
    const result = fn(x);
    cache.set(x, result);
    return result;
  };
}
