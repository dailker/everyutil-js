/**
 * Calculates the WCAG contrast ratio between two colors.
 *
 * Example: contrastRatio("#000", "#fff") → 21
 *
 * @author @dailker
 * @param {string} color1 - First color (hex or rgb).
 * @param {string} color2 - Second color (hex or rgb).
 * @returns {number} The contrast ratio.
 */
import { getLuminance } from './getLuminance';

export function contrastRatio(color1: string, color2: string): number {
  const l1 = getLuminance(color1) + 0.05;
  const l2 = getLuminance(color2) + 0.05;
  return l1 > l2 ? l1 / l2 : l2 / l1;
}
