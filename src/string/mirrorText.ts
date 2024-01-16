/**
 * Returns the mirrored (reversed) version of the input string.
 *
 * Example: mirrorText("hello") → "olleh"
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string} The reversed string.
 */
export function mirrorText(str: string): string {
  return str.split('').reverse().join('');
}
