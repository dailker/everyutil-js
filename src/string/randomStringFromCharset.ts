/**
 * Generates a random string from a given charset.
 * @author @dailker
 * @param {number} length - Length of the string.
 * @param {string} charset - Characters to use.
 * @returns {string}
 */
export function randomStringFromCharset(length: number, charset: string): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}
