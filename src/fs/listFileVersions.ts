/**
 * Lists saved versions for a versioned file.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @returns {Promise<string[]>} List of versioned backup files.
 */
export async function listFileVersions(path: string): Promise<string[]> {
  const fs = await import('fs/promises');
  const pathMod = await import('path');
  const dir = pathMod.dirname(path);
  const base = pathMod.basename(path);
  const files = await fs.readdir(dir);
  return files.filter(f => f.startsWith(base) && f.endsWith('.bak'));
}
