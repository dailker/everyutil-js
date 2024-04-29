/**
 * Reads the last n lines of a file, like the Unix tail command.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {number} [lines=10] - Number of lines to read.
 * @returns {Promise<string[]>} Array of last lines.
 */
export async function tailFile(path: string, lines: number = 10): Promise<string[]> {
  const fs = await import('fs/promises');
  const data = await fs.readFile(path, 'utf8');
  return data.split(/\r?\n/).slice(-lines);
}
