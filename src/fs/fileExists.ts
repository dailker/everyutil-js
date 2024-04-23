/**
 * Checks if a file or directory exists without throwing errors.
 *
 * @author @dailker
 * @param {string} path - File or directory path.
 * @returns {Promise<boolean>} True if exists, false otherwise.
 */
export async function fileExists(path: string): Promise<boolean> {
  const fs = await import('fs/promises');
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}
