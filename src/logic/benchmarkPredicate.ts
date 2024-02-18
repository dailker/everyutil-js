/**
 * Measures average execution time per predicate run.
 * @author @dailker
 * @param {Function} fn - The predicate function to benchmark.
 * @param {any[]} samples - Array of sample inputs.
 * @returns {number} Average execution time per run in milliseconds.
 */
export function benchmarkPredicate(fn: (x: any) => boolean, samples: any[]): number {
  const start = Date.now();
  for (const s of samples) fn(s);
  return (Date.now() - start) / samples.length;
}
