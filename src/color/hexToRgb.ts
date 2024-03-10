/**
 * Converts a hex color string to an RGB object.
 *
 * Example: hexToRgb("#ff0080") → { r: 255, g: 0, b: 128 }
 *
 * @author @dailker
 * @param {string} hex - Hex color string.
 * @returns {{ r: number, g: number, b: number } | null} RGB object or null if invalid.
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const match = hex.replace('#', '').match(/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) return null;
  return {
    r: parseInt(match[1], 16),
    g: parseInt(match[2], 16),
    b: parseInt(match[3], 16)
  };
}
