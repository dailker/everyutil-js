/**
 * Reads a specific chunk of bytes from a file, useful for partial downloads or previews.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {number} start - Start byte.
 * @param {number} length - Number of bytes to read.
 * @returns {Promise<Buffer>} Chunk buffer.
 */
export async function readFileChunk(path: string, start: number, length: number): Promise<Buffer> {
  const fs = await import('fs/promises');
  const fh = await fs.open(path, 'r');
  const buf = Buffer.alloc(length);
  await fh.read(buf, 0, length, start);
  await fh.close();
  return buf;
}
