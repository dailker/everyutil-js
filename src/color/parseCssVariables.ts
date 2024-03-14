/**
 * Parses CSS variables and returns color values.
 *
 * Example: parseCssVariables(":root { --main: #336699; }") → { '--main': '#336699' }
 *
 * @author @dailker
 * @param {string} styleString - CSS style string.
 * @returns {Record<string, string>} Map of variable names to color values.
 */
export function parseCssVariables(styleString: string): Record<string, string> {
  const vars: Record<string, string> = {};
  const regex = /--([\w-]+)\s*:\s*([^;]+);/g;
  let match;
  while ((match = regex.exec(styleString))) {
    vars[`--${match[1]}`] = match[2].trim();
  }
  return vars;
}
