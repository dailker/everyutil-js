/**
 * Adds left and right padding to each line in a multi-line string.
 *
 * Example: padLines("a\nb", 2, 1) → "  a \n  b "
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @param {number} [left=0] - Number of spaces to add to the left of each line.
 * @param {number} [right=0] - Number of spaces to add to the right of each line.
 * @returns {string} The padded string.
 */
export function padLines(str: string, left = 0, right = 0): string {
  return str.split('\n').map(line =>
    ' '.repeat(left) + line + ' '.repeat(right)
  ).join('\n');
}
