/**
 * Finds all hashtags in a string.
 *
 * Example: extractHashtags("#fun #dev life") → ["#fun", "#dev"]
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string[]} Array of hashtags found.
 */
export function extractHashtags(str: string): string[] {
  const regex = /#[\w-]+/g;
  return str.match(regex) || [];
}
