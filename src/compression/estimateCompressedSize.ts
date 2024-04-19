/**
 * Estimates the size of a file once compressed without creating the full compressed file.
 * Allows selection of compression method and level.
 *
 * @author @dailker
 * @param {string} filePath - Path to the file.
 * @param {{ method?: 'gzip' | 'deflate'; level?: number }} [options]
 * @returns {Promise<number>} Estimated compressed size in bytes.
 */
export async function estimateCompressedSize(filePath: string, options?: { method?: 'gzip' | 'deflate'; level?: number }): Promise<number> {
  const fs = await import('fs/promises');
  const zlib = await import('zlib');
  const data = await fs.readFile(filePath);
  return new Promise((resolve, reject) => {
    const cb = (err: any, buf: Buffer) => err ? reject(err) : resolve(buf.length);
    if (options?.method === 'deflate') zlib.deflate(data, { level: options.level }, cb);
    else zlib.gzip(data, { level: options?.level }, cb);
  });
}
