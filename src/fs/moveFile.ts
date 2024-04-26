/**
 * Moves or renames a file or directory. Optionally overwrites the destination if it exists.
 *
 * @author @dailker
 * @param {string} src - Source path.
 * @param {string} dest - Destination path.
 * @param {{ overwrite?: boolean }} [options]
 * @returns {Promise<void>}
 */
export async function moveFile(src: string, dest: string, options?: { overwrite?: boolean }): Promise<void> {
  const fs = await import('fs/promises');
  if (options?.overwrite) {
    try { await fs.rm(dest, { force: true, recursive: true }); } catch {}
  }
  await fs.rename(src, dest);
}
