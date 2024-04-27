/**
 * Reads a file, attempting to detect encoding (UTF-8, UTF-16, etc.) automatically.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {string} [defaultEncoding]
 * @returns {Promise<string>} File contents.
 */
export async function readFileWithEncodingDetection(path: string, defaultEncoding?: string): Promise<string> {
  const fs = await import('fs/promises');
  const jschardet = await import('jschardet');
  const buffer = await fs.readFile(path);
  const detected = jschardet.detect(buffer);
  return buffer.toString((detected.encoding as BufferEncoding) || defaultEncoding || 'utf8');
}
