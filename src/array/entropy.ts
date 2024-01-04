/**
 * Returns the Shannon entropy of the array.
 * @author @dailker
 * @param {any[]} array
 * @returns {number}
 */
export function entropy(array: any[]): number {
  const freq = new Map<any, number>();
  for (const item of array) freq.set(item, (freq.get(item) ?? 0) + 1);
  const n = array.length;
  let ent = 0;
  for (const count of freq.values()) {
    const p = count / n;
    ent -= p * Math.log2(p);
  }
  return ent;
}
