/**
 * Retrieves metadata such as size, creation, modification times, and permissions for a file.
 *
 * @author @dailker
 * @param {string} path - The file path.
 * @returns {Promise<import('fs').Stats>} The file stats.
 */
export async function getFileStats(path: string): Promise<import('fs').Stats> {
  const fs = await import('fs/promises');
  return fs.stat(path);
}
