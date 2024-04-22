/**
 * Creates a temporary file with an optional prefix and file extension, returning its path.
 *
 * @author @dailker
 * @param {string} [prefix] - Optional prefix.
 * @param {{ extension?: string }} [options]
 * @returns {Promise<string>} Path to the temp file.
 */
export async function createTempFile(prefix?: string, options?: { extension?: string }): Promise<string> {
  const os = await import('os');
  const fs = await import('fs/promises');
  const path = await import('path');
  const tmpDir = os.tmpdir();
  const name = (prefix || 'tmp') + Math.random().toString(36).slice(2) + (options?.extension || '');
  const tmpPath = path.join(tmpDir, name);
  await fs.writeFile(tmpPath, '');
  return tmpPath;
}
