/**
 * Empties the contents of a directory but keeps the directory itself intact.
 *
 * @author @dailker
 * @param {string} path - Directory path.
 * @returns {Promise<void>}
 */
export async function emptyDir(path: string): Promise<void> {
  const fs = await import('fs/promises');
  for (const entry of await fs.readdir(path)) {
    await fs.rm(require('path').join(path, entry), { recursive: true, force: true });
  }
}
