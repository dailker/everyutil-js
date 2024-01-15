/**
 * Randomly uppercases or lowercases each character in the string.
 *
 * Example: randomCase("devtools") → "DeVToOlS"
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string} The randomly cased string.
 */
export function randomCase(str: string): string {
  return str.split('').map(c =>
    /[a-z]/i.test(c) ? (Math.random() < 0.5 ? c.toLowerCase() : c.toUpperCase()) : c
  ).join('');
}
