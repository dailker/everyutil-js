/**
 * Reads the target path of a symbolic link.
 *
 * @author @dailker
 * @param {string} path - Symlink path.
 * @returns {Promise<string>} Target path.
 */
export async function readSymlinkTarget(path: string): Promise<string> {
  const fs = await import('fs/promises');
  return fs.readlink(path);
}
