/**
 * Returns a random number from a normal (Gaussian) distribution.
 * @author @dailker
 * @param {number} [mean=0] - The mean of the distribution.
 * @param {number} [std=1] - The standard deviation of the distribution.
 * @returns {number} A random number from the normal distribution.
 */
export function randomGaussian(mean = 0, std = 1): number {
  // Box-Muller transform
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return mean + std * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
