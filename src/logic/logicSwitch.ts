/**
 * Conditional dispatch similar to switch(value) { case x: ... }.
 * @author @dailker
 */
export function logicSwitch<T, R>(value: T, cases: Array<[T, () => R]>, defaultFn: () => R): R {
  for (const [test, fn] of cases) if (test === value) return fn();
  return defaultFn();
}
