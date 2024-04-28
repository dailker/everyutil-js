/**
 * Deletes a directory and all its contents recursively, like rm -rf.
 *
 * @author @dailker
 * @param {string} path - Directory path.
 * @returns {Promise<void>}
 */
export async function recursiveDelete(path: string): Promise<void> {
  const fs = await import('fs/promises');
  await fs.rm(path, { recursive: true, force: true });
}
