/**
 * Pulls out unique values for a given key from an array of objects.
 * @author @dailker
 * @template T, K extends keyof T
 * @param {T[]} array
 * @param {K} key
 * @returns {T[K][]}
 */
export function pluckUnique<T, K extends keyof T>(array: T[], key: K): T[K][] {
  const seen = new Set<T[K]>();
  const result: T[K][] = [];
  for (const item of array) {
    if (!seen.has(item[key])) {
      seen.add(item[key]);
      result.push(item[key]);
    }
  }
  return result;
}
