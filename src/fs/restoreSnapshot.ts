/**
 * Restores a snapshot to a target directory.
 *
 * @author @dailker
 * @param {string} snapshotPath - Path to snapshot directory.
 * @param {string} targetDir - Target directory.
 * @returns {Promise<void>}
 */
export async function restoreSnapshot(snapshotPath: string, targetDir: string): Promise<void> {
  const fs = await import('fs/promises');
  const path = await import('path');
  await fs.mkdir(targetDir, { recursive: true });
  for (const entry of await fs.readdir(snapshotPath, { withFileTypes: true })) {
    const srcPath = path.join(snapshotPath, entry.name);
    const destPath = path.join(targetDir, entry.name);
    if (entry.isDirectory()) {
      await restoreSnapshot(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}
