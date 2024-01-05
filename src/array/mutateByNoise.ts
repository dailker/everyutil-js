/**
 * Applies light randomness to numeric array elements.
 * @author @dailker
 * @param {number[]} array
 * @param {number} [strength=0.1]
 * @returns {number[]}
 */
export function mutateByNoise(array: number[], strength = 0.1): number[] {
  return array.map(x => x + (Math.random() * 2 - 1) * strength * x);
}
