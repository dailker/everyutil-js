/**
 * Centers text in a given width, using a specified fill character.
 *
 * Example: centerText("hi", 5, "-") → "--hi-"
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @param {number} width - The total width of the resulting string.
 * @param {string} [fillChar=" "] - The character to use for padding.
 * @returns {string} The centered string.
 */
export function centerText(str: string, width: number, fillChar = ' '): string {
  const total = Math.max(width - str.length, 0);
  const left = Math.floor(total / 2);
  const right = total - left;
  return fillChar.repeat(left) + str + fillChar.repeat(right);
}
