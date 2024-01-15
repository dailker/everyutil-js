/**
 * Identifies Unicode blocks present in the input string.
 *
 * Scans each character and returns a list of Unicode block names (e.g., Latin, Cyrillic, Emoji, Han, etc.)
 * that are detected in the string, in the order of their first appearance.
 *
 * Supported blocks include: Latin, Latin-1 Supplement, Cyrillic, Greek, Arabic, Hebrew, Devanagari, Thai,
 * Hangul, Hiragana, Katakana, Han, Emoji, Symbols, Math.
 *
 * @author @dailker
 * @param {string} str - The input string to analyze.
 * @returns {string[]} An array of Unicode block names found in the string, in order of appearance.
 *
 * @example
 * findUnicodeBlocks("hello 你好 Привет 😀")
 * // returns ['Latin', 'Han', 'Cyrillic', 'Emoji']
 */
const unicodeBlocks: { name: string; regex: RegExp }[] = [
  { name: 'Latin', regex: /[\u0000-\u007F]/ },
  { name: 'Latin-1 Supplement', regex: /[\u0080-\u00FF]/ },
  { name: 'Cyrillic', regex: /[\u0400-\u04FF]/ },
  { name: 'Greek', regex: /[\u0370-\u03FF]/ },
  { name: 'Arabic', regex: /[\u0600-\u06FF]/ },
  { name: 'Hebrew', regex: /[\u0590-\u05FF]/ },
  { name: 'Devanagari', regex: /[\u0900-\u097F]/ },
  { name: 'Thai', regex: /[\u0E00-\u0E7F]/ },
  { name: 'Hangul', regex: /[\uAC00-\uD7AF]/ },
  { name: 'Hiragana', regex: /[\u3040-\u309F]/ },
  { name: 'Katakana', regex: /[\u30A0-\u30FF]/ },
  { name: 'Han', regex: /[\u4E00-\u9FFF]/ },
  { name: 'Emoji', regex: /\p{Emoji}/u },
  { name: 'Symbols', regex: /[\u2000-\u206F]/ },
  { name: 'Math', regex: /[\u2200-\u22FF]/ },
];

export function findUnicodeBlocks(str: string): string[] {
  const found: string[] = [];
  const seen = new Set<string>();
  for (const char of str) {
    for (const block of unicodeBlocks) {
      if (block.regex.test(char) && !seen.has(block.name)) {
        found.push(block.name);
        seen.add(block.name);
      }
    }
  }
  return found;
}
