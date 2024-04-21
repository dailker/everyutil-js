/**
 * Creates a temporary directory for transient storage.
 *
 * @author @dailker
 * @param {string} [prefix] - Optional prefix.
 * @returns {Promise<string>} Path to the temp directory.
 */
export async function createTempDirectory(prefix?: string): Promise<string> {
  const os = await import('os');
  const fs = await import('fs/promises');
  const path = await import('path');
  const tmpDir = os.tmpdir();
  const name = (prefix || 'tmp') + Math.random().toString(36).slice(2);
  const dirPath = path.join(tmpDir, name);
  await fs.mkdir(dirPath);
  return dirPath;
}
