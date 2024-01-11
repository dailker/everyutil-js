/**
 * Returns an array of random unique integers within the range [min, max].
 * @author @dailker
 * @param {number} count - The number of unique random numbers to generate.
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive).
 * @returns {number[]} An array of unique random numbers.
 */
export function randomUniqueRange(count: number, min: number, max: number): number[] {
  const pool = [];
  for (let i = min; i <= max; i++) pool.push(i);
  const result: number[] = [];
  while (result.length < count && pool.length) {
    const idx = Math.floor(Math.random() * pool.length);
    result.push(pool.splice(idx, 1)[0]);
  }
  return result;
}
