/**
 * Generates CSS variables for an entire palette.
 *
 * Example: convertPaletteToCssVars(["#336699", "#ff0080"], "--color") → ":root { --color-0: #336699; --color-1: #ff0080; }"
 *
 * @author @dailker
 * @param {string[]} palette - Array of color strings.
 * @param {string} prefix - CSS variable prefix.
 * @returns {string} CSS variable declarations.
 */
export function convertPaletteToCssVars(palette: string[], prefix: string): string {
  return `:root { ` + palette.map((c, i) => `${prefix}-${i}: ${c};`).join(' ') + ` }`;
}
