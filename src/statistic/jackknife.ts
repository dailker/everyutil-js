/**
 * Performs jackknife resampling.
 *
 * Example: jackknife([1,2,3], arr => arr.reduce((a,b)=>a+b,0)/arr.length)
 *
 * @author @dailker
 * @param {number[]} sample - Original sample array.
 * @param {(arr: number[]) => number} statistic - Statistic function.
 * @returns {number[]} Array of jackknife statistics.
 */
export function jackknife(sample: number[], statistic: (arr: number[]) => number): number[] {
  return sample.map((_, i) => statistic(sample.filter((_, j) => j !== i)));
}
