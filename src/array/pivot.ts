/**
 * Turns an array of objects into a "pivot table" structure.
 * @author @dailker
 * @template T, K extends keyof T, V extends keyof T
 * @param {T[]} array
 * @param {K} key
 * @param {V} value
 * @returns {Record<string, T[V]>}
 */
export function pivot<T, K extends keyof T, V extends keyof T>(
  array: T[],
  key: K,
  value: V
): Record<string, T[V]> {
  const result: Record<string, T[V]> = {};
  for (const item of array) {
    result[String(item[key])] = item[value];
  }
  return result;
}
