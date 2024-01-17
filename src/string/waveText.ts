/**
 * Produces a wavy text animation effect by alternating letter casing.
 *
 * Example: waveText("hello") → "hElLo"
 *
 * @author @dailker
 * @param {string} str - The input string to wave.
 * @returns {string} The wavy-cased string.
 */
export function waveText(str: string): string {
  return str.split('').map((c, i) =>
    i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()
  ).join('');
}
