/**
 * Creates a striped pattern of colors (for canvas/svg).
 *
 * Example: createStripedPattern(["#336699", "#ff0080"], 10)
 *
 * @author @dailker
 * @param {string[]} colors - Array of color strings.
 * @param {number} width - Width of each stripe.
 * @returns {string[]} Array representing the striped pattern.
 */
export function createStripedPattern(colors: string[], width: number): string[] {
  const pattern: string[] = [];
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < width; j++) {
      pattern.push(colors[i]);
    }
  }
  return pattern;
}
