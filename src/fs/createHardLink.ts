/**
 * Creates a hard link pointing to the same inode as the source file.
 *
 * @author @dailker
 * @param {string} src - Source file path.
 * @param {string} dest - Destination file path.
 * @returns {Promise<void>}
 */
export async function createHardLink(src: string, dest: string): Promise<void> {
  const fs = await import('fs/promises');
  await fs.link(src, dest);
}
