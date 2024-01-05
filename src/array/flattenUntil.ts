/**
 * Flattens an array until the provided depth function returns false for an element.
 * @author @dailker
 * @template T
 * @param {any[]} array - The input array.
 * @param {(item: any, depth: number) => boolean} depthFn - Function to determine if an item should be further flattened.
 * @param {number} [depth=0] - Current depth (for recursion).
 * @returns {T[]} - Flattened array.
 */
export function flattenUntil<T>(
  array: any[],
  depthFn: (item: any, depth: number) => boolean,
  depth = 0
): T[] {
  const result: T[] = [];
  for (const item of array) {
    if (Array.isArray(item) && depthFn(item, depth)) {
      result.push(...flattenUntil<T>(item, depthFn, depth + 1));
    } else {
      result.push(item);
    }
  }
  return result;
}
