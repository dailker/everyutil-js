/**
 * Rotates the array in chunks of N elements.
 * @author @dailker
 * @template T
 * @param {T[]} array - The array to rotate.
 * @param {number} chunkSize - Size of each chunk.
 * @param {number} count - Number of chunk rotations (positive=right, negative=left).
 * @returns {T[]} Rotated array.
 */
export function arrayRotateChunks<T>(array: T[], chunkSize: number, count: number): T[] {
  if (chunkSize <= 0) return array.slice();
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  const n = chunks.length;
  const rot = ((count % n) + n) % n;
  const rotated = chunks.slice(-rot).concat(chunks.slice(0, -rot));
  return rotated.flat();
}
