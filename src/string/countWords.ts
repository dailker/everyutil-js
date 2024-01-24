/**
 * Counts words in a string (by whitespace or punctuation).
 * @author @dailker
 * @param {string} str
 * @param {'whitespace'|'punctuation'} [mode='whitespace']
 * @returns {number}
 */
export function countWords(str: string, mode: 'whitespace'|'punctuation' = 'whitespace'): number {
  if (mode === 'punctuation') {
    return (str.match(/\b\w+\b/g) || []).length;
  }
  return (str.trim().split(/\s+/).filter(Boolean)).length;
}
