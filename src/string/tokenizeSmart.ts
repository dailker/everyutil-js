/**
 * Splits string into tokens, respecting quotes, punctuation, emojis, etc.
 *
 * Example: tokenizeSmart('Hello, "Mr. Smith" 👋') → ['Hello', '"Mr. Smith"', '👋']
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string[]} Array of tokens.
 */
export function tokenizeSmart(str: string): string[] {
  const regex = /"([^"]+)"|'([^']+)'|[\p{Emoji}\p{P}]+|\w+/gu;
  const tokens: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(str))) {
    tokens.push(match[1] || match[2] || match[0]);
  }
  return tokens;
}
