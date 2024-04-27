/**
 * Reads a specific version of a file.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {string} versionId - Version identifier (timestamped backup name).
 * @returns {Promise<Buffer>} File contents.
 */
export async function readFileVersion(path: string, versionId: string): Promise<Buffer> {
  const fs = await import('fs/promises');
  const pathMod = await import('path');
  const dir = pathMod.dirname(path);
  return fs.readFile(pathMod.join(dir, versionId));
}
