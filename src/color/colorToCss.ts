/**
 * Converts a color object to a CSS color string (rgb/rgba/hsl/hex).
 *
 * Example: colorToCss({ r: 255, g: 0, b: 128, a: 0.5 }) → "rgba(255,0,128,0.5)"
 *
 * @author @dailker
 * @param {object} color - Color object with r, g, b, and optional a.
 * @returns {string} CSS color string.
 */
export function colorToCss(color: { r: number; g: number; b: number; a?: number }): string {
  if (typeof color.a === 'number' && color.a < 1)
    return `rgba(${color.r},${color.g},${color.b},${color.a})`;
  return `rgb(${color.r},${color.g},${color.b})`;
}
