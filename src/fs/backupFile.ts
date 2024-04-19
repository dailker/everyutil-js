/**
 * Creates a timestamped backup copy of a file into a specified directory.
 *
 * @author @dailker
 * @param {string} src - Source file path.
 * @param {string} backupDir - Backup directory.
 * @returns {Promise<string>} Path to backup file.
 */
export async function backupFile(src: string, backupDir: string): Promise<string> {
  const fs = await import('fs/promises');
  const path = await import('path');
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const dest = path.join(backupDir, path.basename(src) + '.' + ts + '.bak');
  await fs.copyFile(src, dest);
  return dest;
}
