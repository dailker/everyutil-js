/**
 * Generates a palette of colors that meet accessibility standards.
 *
 * Example: generateAccessiblePalette("#336699")
 *
 * @author @dailker
 * @param {string} baseColor - The base color (hex or rgb).
 * @returns {string[]} Array of accessible hex color strings.
 */
import { generatePalette } from './generatePalette';
import { contrastRatio } from './contrastRatio';

export function generateAccessiblePalette(baseColor: string): string[] {
  const palette = generatePalette(baseColor, 'analogous');
  return palette.filter(c => contrastRatio(baseColor, c) >= 4.5);
}
