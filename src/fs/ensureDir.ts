/**
 * Creates a directory and any missing parent directories if they don’t exist.
 *
 * @author @dailker
 * @param {string} path - Directory path.
 * @returns {Promise<void>}
 */
export async function ensureDir(path: string): Promise<void> {
  const fs = await import('fs/promises');
  await fs.mkdir(path, { recursive: true });
}
