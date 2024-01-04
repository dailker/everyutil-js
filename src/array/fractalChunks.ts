/**
 * Breaks array into recursively nested chunks of halves (like binary tree levels).
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @returns {any}
 */
export function fractalChunks<T>(array: T[]): any {
  if (array.length <= 1) return array.map(x => [x]);
  const mid = Math.floor(array.length / 2);
  const left = fractalChunks(array.slice(0, mid));
  const right = fractalChunks(array.slice(mid));
  return [left, right];
}
