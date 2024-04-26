/**
 * Lists available snapshots stored in a base directory.
 *
 * @author @dailker
 * @param {string} snapshotBaseDir - Base directory for snapshots.
 * @returns {Promise<string[]>} List of snapshot directories.
 */
export async function listSnapshots(snapshotBaseDir: string): Promise<string[]> {
  const fs = await import('fs/promises');
  const entries = await fs.readdir(snapshotBaseDir, { withFileTypes: true });
  return entries.filter(e => e.isDirectory()).map(e => e.name);
}
