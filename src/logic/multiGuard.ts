/**
 * Like switch/case or pattern-matching using an array of pairs.
 * @author @dailker
 */
export function multiGuard<T, R>(pairs: Array<[(x: T) => boolean, (x: T) => R]>, input: T): R | undefined {
  for (const [cond, fn] of pairs) if (cond(input)) return fn(input);
  return undefined;
}
