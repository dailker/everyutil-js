/**
 * Collapses multiple spaces and newlines into a single space.
 *
 * Example: collapseWhitespace("a   b\n\nc") → "a b c"
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string} The collapsed string.
 */
export function collapseWhitespace(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}
