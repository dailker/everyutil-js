/**
 * Functional switch/case builder (by value or predicate).
 * @author @dailker
 */
export function switchCase<T, R>(cases: Array<[(val: T) => boolean, (val: T) => R] | [T, (val: T) => R]>, defaultFn: (val: T) => R): (val: T) => R {
  return (val: T) => {
    for (const [test, fn] of cases) {
      if (typeof test === 'function' && (test as (val: T) => boolean)(val)) return fn(val);
      if (test === val) return fn(val);
    }
    return defaultFn(val);
  };
}
