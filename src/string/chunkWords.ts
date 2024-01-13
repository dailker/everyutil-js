/**
 * Splits a string into fixed-size word chunks.
 *
 * Example: chunkWords("This is a test string", 2) → [["This", "is"], ["a", "test"], ["string"]]
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @param {number} count - Number of words per chunk.
 * @returns {string[][]} Array of word chunks.
 */
export function chunkWords(str: string, count: number): string[][] {
  const words = str.trim().split(/\s+/);
  const result: string[][] = [];
  for (let i = 0; i < words.length; i += count) {
    result.push(words.slice(i, i + count));
  }
  return result;
}
