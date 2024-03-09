/**
 * Returns black or white for readable text on a given background color.
 *
 * Example: getAccessibleTextColor("#336699") → "#fff"
 *
 * @author @dailker
 * @param {string} backgroundColor - The background color (hex or rgb).
 * @returns {string} "#000" or "#fff" for best contrast.
 */
import { isColorDark } from './isColorDark';

export function getAccessibleTextColor(backgroundColor: string): string {
  return isColorDark(backgroundColor) ? '#fff' : '#000';
}
