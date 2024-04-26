/**
 * Reads a file and returns its contents encoded in base64.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @returns {Promise<string>} Base64-encoded contents.
 */
export async function readFileAsBase64(path: string): Promise<string> {
  const fs = await import('fs/promises');
  const data = await fs.readFile(path);
  return data.toString('base64');
}
