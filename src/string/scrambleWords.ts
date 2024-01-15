/**
 * Scrambles the letters inside each word of a string, preserving first and last letter.
 *
 * Example: scrambleWords("hello world") → "hlelo wrold"
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string} The string with scrambled words.
 */
export function scrambleWords(str: string): string {
  return str.replace(/\w+/g, word => {
    if (word.length <= 3) return word;
    const arr = word.split('');
    for (let i = 1; i < arr.length - 1; i++) {
      const j = 1 + Math.floor(Math.random() * (arr.length - 2));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  });
}
