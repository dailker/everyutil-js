/**
 * Reverses the order of words in a string (not the letters).
 * @author @dailker
 * @param {string} str
 * @returns {string}
 */
export function reverseWords(str: string): string {
  return str.split(/\s+/).reverse().join(' ');
}
