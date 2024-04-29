/**
 * Creates symbolic or junction links for files/directories.
 *
 * @author @dailker
 * @param {string} src - Source path.
 * @param {string} dest - Destination path.
 * @param {'file' | 'dir' | 'junction'} [type]
 * @returns {Promise<void>}
 */
export async function symlink(src: string, dest: string, type?: 'file' | 'dir' | 'junction'): Promise<void> {
  const fs = await import('fs/promises');
  await fs.symlink(src, dest, type);
}
