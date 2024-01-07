/**
 * Deterministic shuffle based on a seed.
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @param {number} [seed=1]
 * @returns {T[]}
 */
export function shuffleStable<T>(array: T[], seed = 1): T[] {
  // Simple LCG for deterministic pseudo-random
  function random() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
