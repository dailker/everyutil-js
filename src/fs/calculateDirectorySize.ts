/**
 * Calculates the total size of all files inside a directory recursively.
 *
 * @author @dailker
 * @param {string} path - Directory path.
 * @returns {Promise<number>} Total size in bytes.
 */
export async function calculateDirectorySize(path: string): Promise<number> {
  const fs = await import('fs/promises');
  const entries = await fs.readdir(path, { withFileTypes: true });
  let size = 0;
  for (const entry of entries) {
    const fullPath = require('path').join(path, entry.name);
    if (entry.isDirectory()) size += await calculateDirectorySize(fullPath);
    else if (entry.isFile()) size += (await fs.stat(fullPath)).size;
  }
  return size;
}
