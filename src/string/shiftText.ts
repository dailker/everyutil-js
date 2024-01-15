/**
 * Shifts characters in the string like a Caesar cipher.
 *
 * Example: shiftText("abc", 1) → "bcd"
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @param {number} shift - The number of positions to shift each letter.
 * @returns {string} The shifted string.
 */
export function shiftText(str: string, shift: number): string {
  return str.replace(/[a-z]/gi, c => {
    const base = c >= 'a' && c <= 'z' ? 97 : 65;
    return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
  });
}
