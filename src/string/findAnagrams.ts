/**
 * Checks if two strings are anagrams.
 * @author @dailker
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */
export function findAnagrams(a: string, b: string): boolean {
  const normalize = (s: string) => s.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  return normalize(a) === normalize(b);
}
