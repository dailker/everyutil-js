/**
 * Generates a checkerboard pattern (for canvas/svg).
 *
 * Example: createCheckerboardPattern("#fff", "#000", 2)
 *
 * @author @dailker
 * @param {string} color1 - First color.
 * @param {string} color2 - Second color.
 * @param {number} size - Size of each square.
 * @returns {string[][]} 2D array representing the checkerboard.
 */
export function createCheckerboardPattern(color1: string, color2: string, size: number): string[][] {
  const pattern: string[][] = [];
  for (let i = 0; i < size; i++) {
    const row: string[] = [];
    for (let j = 0; j < size; j++) {
      row.push((i + j) % 2 === 0 ? color1 : color2);
    }
    pattern.push(row);
  }
  return pattern;
}
