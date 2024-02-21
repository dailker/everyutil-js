/**
 * Pattern-matching: checks predicates in order, executes first match.
 * @author @dailker
 */
export function branch<T, R>(predicates: Array<[(x: T) => boolean, (x: T) => R]>, fallbackFn?: (x: T) => R): (x: T) => R {
  return (x: T) => {
    for (const [cond, fn] of predicates) if (cond(x)) return fn(x);
    return fallbackFn ? fallbackFn(x) : undefined as any;
  };
}
