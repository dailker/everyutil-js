/**
 * Safely deletes a file or directory. Supports forced deletion and recursive removal of directories.
 *
 * @author @dailker
 * @param {string} path - Path to file or directory.
 * @param {{ force?: boolean; recursive?: boolean }} [options]
 * @returns {Promise<void>}
 */
export async function deleteFile(path: string, options?: { force?: boolean; recursive?: boolean }): Promise<void> {
  const fs = await import('fs/promises');
  await fs.rm(path, { force: !!options?.force, recursive: !!options?.recursive });
}
