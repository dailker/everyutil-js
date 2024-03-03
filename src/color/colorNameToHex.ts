/**
 * Converts a named CSS color to hex.
 *
 * Example: colorNameToHex("Sky Blue") → "#87ceeb"
 *
 * @author @dailker
 * @param {string} name - The CSS color name.
 * @returns {string|null} The hex value or null if not found.
 */
import { colorNameMap } from './namedColors';

export function colorNameToHex(name: string): string | null {
  const key = Object.keys(colorNameMap).find(k => colorNameMap[k].toLowerCase() === name.toLowerCase() || k.toLowerCase() === name.toLowerCase());
  return key || null;
}
