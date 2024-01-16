/**
 * Like Array.splice but for strings. Removes and/or inserts text at a given position.
 *
 * Example: stringSplice("abcdef", 2, 2, "ZZ") → "abZZef"
 *
 * @author @dailker
 * @param {string} str - The original string.
 * @param {number} start - The index at which to start changing the string.
 * @param {number} deleteCount - The number of characters to remove.
 * @param {string} [insert=""] - The string to insert at the start position.
 * @returns {string} The resulting string after splicing.
 */
export function stringSplice(str: string, start: number, deleteCount: number, insert = ''): string {
  return str.slice(0, start) + insert + str.slice(start + deleteCount);
}
