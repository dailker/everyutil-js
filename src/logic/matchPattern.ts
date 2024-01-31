/**
 * Declaratively match values against patterns with fallbacks.
 * @author @dailker
 */
export function matchPattern<T, R>(patterns: Array<[(val: T) => boolean, (val: T) => R] | [T, (val: T) => R]>, fallback: (val: T) => R): (val: T) => R {
  return (val: T) => {
    for (const [pattern, fn] of patterns) {
      if (typeof pattern === 'function' && (pattern as (val: T) => boolean)(val)) return fn(val);
      if (pattern === val) return fn(val);
    }
    return fallback(val);
  };
}
