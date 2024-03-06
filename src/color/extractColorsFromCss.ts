/**
 * Extracts color values from a CSS string.
 *
 * Example: extractColorsFromCss("body { color: #336699; background: #fff; }") → ["#336699", "#fff"]
 *
 * @author @dailker
 * @param {string} cssString - CSS string.
 * @returns {string[]} Array of color values.
 */
export function extractColorsFromCss(cssString: string): string[] {
  const regex = /#([0-9a-fA-F]{3,8})|rgba?\([^)]*\)|hsla?\([^)]*\)/g;
  return cssString.match(regex) || [];
}
