/**
 * Slugifies a string, supporting emoji, camelCase, kebab-case, and locale-aware slugs.
 *
 * Example: slugifyAdvanced("HelloWorld_😀 Test") → "hello-world-😀-test"
 *
 * @author @dailker
 * @param {string} str - The input string to slugify.
 * @returns {string} The slugified string.
 */
export function slugifyAdvanced(str: string): string {
  return str
    .normalize('NFKD')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/[^\p{L}\p{N}\p{Emoji}-]+/gu, '')
    .replace(/-+/g, '-')
    .toLowerCase();
}
