/**
 * Generates a stable hash from a number, optionally using a seed.
 * @author @dailker
 * @param {number} n - The number to hash.
 * @param {number} [seed=0] - Optional seed for hashing.
 * @returns {number} The hash value.
 */
export function hashNumber(n: number, seed = 0): number {
  let hash = n ^ seed;
  hash = ((hash >> 16) ^ hash) * 0x45d9f3b;
  hash = ((hash >> 16) ^ hash) * 0x45d9f3b;
  hash = (hash >> 16) ^ hash;
  return hash >>> 0;
}
