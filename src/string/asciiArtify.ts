/**
 * Converts text into boxed ASCII art (useful for CLI tools).
 *
 * Example:
 * asciiArtify("hi") →
 * +----+
 * | hi |
 * +----+
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string} The ASCII art string.
 */
export function asciiArtify(str: string): string {
  const line = '+' + '-'.repeat(str.length + 2) + '+';
  return `${line}\n| ${str} |\n${line}`;
}
