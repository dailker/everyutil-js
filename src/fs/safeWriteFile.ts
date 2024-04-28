/**
 * Writes data to a file atomically by writing to a temporary file first, then renaming.
 *
 * @author @dailker
 * @param {string} path - The file path.
 * @param {string | Buffer} data - The data to write.
 * @returns {Promise<void>}
 */
export async function safeWriteFile(path: string, data: string | Buffer): Promise<void> {
  const fs = await import('fs/promises');
  const pathMod = await import('path');
  const tmpPath = path + '.' + Math.random().toString(36).slice(2) + '.tmp';
  await fs.writeFile(tmpPath, data);
  await fs.rename(tmpPath, path);
}
