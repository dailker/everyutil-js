/**
 * Applies logical skew to a function (e.g. pessimism, optimism).
 * @author @dailker
 */
export function simulateBias<T>(fn: (x: T) => boolean, biasFn: (result: boolean) => boolean): (x: T) => boolean {
  return (x: T) => biasFn(fn(x));
}
