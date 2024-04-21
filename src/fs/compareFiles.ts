/**
 * Compares two files for binary equality.
 *
 * @author @dailker
 * @param {string} pathA - First file path.
 * @param {string} pathB - Second file path.
 * @returns {Promise<boolean>} True if files are equal, false otherwise.
 */
export async function compareFiles(pathA: string, pathB: string): Promise<boolean> {
  const fs = await import('fs/promises');
  const [a, b] = await Promise.all([fs.readFile(pathA), fs.readFile(pathB)]);
  return a.equals(b);
}
