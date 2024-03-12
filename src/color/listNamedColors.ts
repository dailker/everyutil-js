/**
 * Returns a list of all named CSS colors with their hex values.
 *
 * Example: listNamedColors() → [{ name: "Sky Blue", hex: "#87ceeb" }, ...]
 *
 * @author @dailker
 * @returns {{ name: string, hex: string }[]} Array of color names and hex values.
 */
import { colorNameMap } from './namedColors';

export function listNamedColors(): { name: string; hex: string }[] {
  return Object.entries(colorNameMap).map(([hex, name]) => ({ name: name as string, hex }));
}
