/**
 * Generates a color palette based on a base color and scheme type.
 *
 * Example: generatePalette("#336699", "complementary")
 *
 * @author @dailker
 * @param {string} baseColor - The base color (hex or rgb).
 * @param {string} schemeType - Palette type (complementary, triadic, analogous, etc.).
 * @returns {string[]} Array of hex color strings.
 */
import { rgbToHsl } from './rgbToHsl';
import { hslToRgb } from './hslToRgb';
import { rgbToHex } from './rgbToHex';
import { parseColorString } from './parseColorString';

export function generatePalette(baseColor: string, schemeType: string): string[] {
  const c = parseColorString(baseColor);
  if (!c) return [];
  const { h, s, l } = rgbToHsl(c.r, c.g, c.b);
  let palette: { h: number; s: number; l: number }[] = [];
  switch (schemeType) {
    case 'complementary':
      palette = [
        { h, s, l },
        { h: (h + 180) % 360, s, l }
      ];
      break;
    case 'triadic':
      palette = [
        { h, s, l },
        { h: (h + 120) % 360, s, l },
        { h: (h + 240) % 360, s, l }
      ];
      break;
    case 'analogous':
      palette = [
        { h: (h + 330) % 360, s, l },
        { h, s, l },
        { h: (h + 30) % 360, s, l }
      ];
      break;
    default:
      palette = [{ h, s, l }];
  }
  return palette.map(({ h, s, l }) => {
    const rgb = hslToRgb(h, s, l);
    return rgbToHex(rgb.r, rgb.g, rgb.b);
  });
}
