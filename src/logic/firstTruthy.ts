/**
 * Like ||, but lazy evaluation of functions.
 * @author @dailker
 */
export function firstTruthy<T>(...fns: Array<() => T>): T | undefined {
  for (const fn of fns) {
    const val = fn();
    if (val) return val;
  }
  return undefined;
}
