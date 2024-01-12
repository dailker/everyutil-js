/**
 * Alternates between lowercase and uppercase for each letter in the string.
 *
 * Example: alternateCase("hello world") → "HeLlO WoRlD"
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string} The string with alternating case.
 */
export function alternateCase(str: string): string {
  let up = true;
  return str.split('').map(c => {
    if (/[a-z]/i.test(c)) {
      const res = up ? c.toUpperCase() : c.toLowerCase();
      up = !up;
      return res;
    }
    return c;
  }).join('');
}
