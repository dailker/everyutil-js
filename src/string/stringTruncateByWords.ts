/**
 * Truncates a string without cutting off words midway.
 * @author @dailker
 * @param {string} str
 * @param {number} maxWords
 * @returns {string}
 */
export function stringTruncateByWords(str: string, maxWords: number): string {
  const words = str.trim().split(/\s+/);
  if (words.length <= maxWords) return str;
  return words.slice(0, maxWords).join(' ') + '...';
}
