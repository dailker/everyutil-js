/**
 * Writes data to a file atomically to avoid partial writes (writes to a temp file then renames).
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {Buffer | string} data - Data to write.
 * @param {{ encoding?: string }} [options]
 * @returns {Promise<void>}
 */
export async function atomicWriteFile(path: string, data: Buffer | string, options?: { encoding?: string }): Promise<void> {
  const fs = await import('fs/promises');
  const tmpPath = path + '.' + Math.random().toString(36).slice(2) + '.tmp';
  await fs.writeFile(tmpPath, data, options?.encoding as BufferEncoding | undefined);
  await fs.rename(tmpPath, path);
}
