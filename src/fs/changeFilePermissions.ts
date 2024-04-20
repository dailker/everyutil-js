/**
 * Changes the permissions of a file or directory.
 *
 * @author @dailker
 * @param {string} path - File or directory path.
 * @param {string | number} mode - Permission mode.
 * @returns {Promise<void>}
 */
export async function changeFilePermissions(path: string, mode: string | number): Promise<void> {
  const fs = await import('fs/promises');
  await fs.chmod(path, mode);
}
