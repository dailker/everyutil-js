/**
 * Turns an array of numbers into a Unicode sparkline string.
 *
 * Example: sparklineFromNumbers([1, 5, 3, 9]) → "▁▃▂█"
 *
 * @author @dailker
 * @param {number[]} numbers - Array of numbers to visualize.
 * @returns {string} Sparkline string.
 */
const sparkChars = '▁▂▃▄▅▆▇█';
export function sparklineFromNumbers(numbers: number[]): string {
  if (!numbers.length) return '';
  const min = Math.min(...numbers), max = Math.max(...numbers);
  const range = max - min || 1;
  return numbers.map(n =>
    sparkChars[Math.round(((n - min) / range) * (sparkChars.length - 1))]
  ).join('');
}
