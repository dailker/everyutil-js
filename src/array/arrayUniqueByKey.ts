/**
 * Deduplicates array of objects by a given key or predicate.
 * @author @dailker
 * @template T, K
 * @param {T[]} array - Array of objects.
 * @param {(item: T) => K} keyFn - Function to get key.
 * @returns {T[]} Deduplicated array.
 */
export function arrayUniqueByKey<T, K>(array: T[], keyFn: (item: T) => K): T[] {
  const seen = new Set<K>();
  return array.filter(item => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
