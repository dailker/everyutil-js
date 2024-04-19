/**
 * Appends data to the end of a file.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {string | Buffer} data - Data to append.
 * @returns {Promise<void>}
 */
export async function appendToFile(path: string, data: string | Buffer): Promise<void> {
  const fs = await import('fs/promises');
  await fs.appendFile(path, data);
}
