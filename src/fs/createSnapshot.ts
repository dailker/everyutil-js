/**
 * Creates a snapshot of a directory using copy-on-write to save space.
 *
 * @author @dailker
 * @param {string} srcDir - Source directory.
 * @param {string} snapshotDir - Snapshot directory.
 * @returns {Promise<void>}
 */
export async function createSnapshot(srcDir: string, snapshotDir: string): Promise<void> {
  const fs = await import('fs/promises');
  const path = await import('path');
  await fs.mkdir(snapshotDir, { recursive: true });
  for (const entry of await fs.readdir(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const snapPath = path.join(snapshotDir, entry.name);
    if (entry.isDirectory()) {
      await createSnapshot(srcPath, snapPath);
    } else if (entry.isFile()) {
      try { await fs.link(srcPath, snapPath); } catch { await fs.copyFile(srcPath, snapPath); }
    }
  }
}
