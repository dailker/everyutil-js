/**
 * Animates color changes over time.
 *
 * Example: animateColorTransition("#336699", "#ff0080", 1000, cb)
 *
 * @author @dailker
 * @param {string} fromColor - Start color.
 * @param {string} toColor - End color.
 * @param {number} duration - Duration in ms.
 * @param {(color: string) => void} callback - Callback with current color.
 * @returns {() => void} Function to stop the animation.
 */
import { parseColorString } from './parseColorString';
import { rgbToHex } from './rgbToHex';

export function animateColorTransition(fromColor: string, toColor: string, duration: number, callback: (color: string) => void): () => void {
  const start = parseColorString(fromColor);
  const end = parseColorString(toColor);
  if (!start || !end) return () => {};
  let startTime = Date.now();
  const id = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const t = Math.min(1, elapsed / duration);
    const r = Math.round(start.r + (end.r - start.r) * t);
    const g = Math.round(start.g + (end.g - start.g) * t);
    const b = Math.round(start.b + (end.b - start.b) * t);
    callback(rgbToHex(r, g, b));
    if (t === 1) clearInterval(id);
  }, 16);
  return () => clearInterval(id);
}
