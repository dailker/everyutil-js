/**
 * Copies a file from source to destination.
 *
 * @author @dailker
 * @param {string} src - Source file path.
 * @param {string} dest - Destination file path.
 * @returns {Promise<void>}
 */
export async function copyFile(src: string, dest: string): Promise<void> {
  const fs = await import('fs/promises');
  await fs.copyFile(src, dest);
}
