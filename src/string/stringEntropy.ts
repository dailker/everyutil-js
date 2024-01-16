/**
 * Returns the Shannon entropy of a string.
 *
 * Useful for detecting randomness, passwords, or encoded data.
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {number} The Shannon entropy.
 */
export function stringEntropy(str: string): number {
  const freq = new Map<string, number>();
  for (const ch of str) freq.set(ch, (freq.get(ch) ?? 0) + 1);
  const n = str.length;
  let ent = 0;
  for (const count of freq.values()) {
    const p = count / n;
    ent -= p * Math.log2(p);
  }
  return ent;
}
