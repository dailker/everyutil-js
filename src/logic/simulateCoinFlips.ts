/**
 * Returns array of random booleans.
 * @author @dailker
 */
export function simulateCoinFlips(n: number): boolean[] {
  return Array.from({ length: n }, () => Math.random() < 0.5);
}
