/**
 * Generates a CSS variable declaration for a color.
 *
 * Example: colorToCssVariable("#336699", "--main-color") → "--main-color: #336699;"
 *
 * @author @dailker
 * @param {string} color - The color (hex or rgb).
 * @param {string} varName - CSS variable name.
 * @returns {string} CSS variable declaration.
 */
export function colorToCssVariable(color: string, varName: string): string {
  return `${varName}: ${color};`;
}
