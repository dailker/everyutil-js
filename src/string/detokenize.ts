/**
 * Rebuilds a string from tokens with a specified glue (separator).
 *
 * Example: detokenize(["Hello", "world"], " ") → "Hello world"
 *
 * @author @dailker
 * @param {string[]} tokens - Array of tokens.
 * @param {string} [glue=" "] - Separator to use between tokens.
 * @returns {string} The detokenized string.
 */
export function detokenize(tokens: string[], glue = ' '): string {
  return tokens.join(glue);
}
