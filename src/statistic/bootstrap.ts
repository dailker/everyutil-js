/**
 * Performs bootstrap resampling for confidence intervals.
 *
 * Example: bootstrap([1,2,3], arr => arr.reduce((a,b)=>a+b,0)/arr.length, 1000)
 *
 * @author @dailker
 * @param {number[]} sample - Original sample array.
 * @param {(arr: number[]) => number} statistic - Statistic function.
 * @param {number} iterations - Number of resamples.
 * @returns {number[]} Array of bootstrap statistics.
 */
export function bootstrap(sample: number[], statistic: (arr: number[]) => number, iterations: number): number[] {
  const results: number[] = [];
  for (let i = 0; i < iterations; i++) {
    const resample = Array.from({ length: sample.length }, () => sample[Math.floor(Math.random() * sample.length)]);
    results.push(statistic(resample));
  }
  return results;
}
