/**
 * Expands camelCase or PascalCase strings into space-separated, lowercased words.
 *
 * Example: expandCamelCase("helloWorldTest") → "hello world test"
 *
 * @author @dailker
 * @param {string} str - The camelCase or PascalCase string.
 * @returns {string} The expanded string.
 */
export function expandCamelCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}
