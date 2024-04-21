/**
 * Removes oldest versions to limit stored versions.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {number} maxVersions - Maximum versions to keep.
 * @returns {Promise<void>}
 */
export async function cleanupOldVersions(path: string, maxVersions: number): Promise<void> {
  const fs = await import('fs/promises');
  const pathMod = await import('path');
  const dir = pathMod.dirname(path);
  const base = pathMod.basename(path);
  const files = (await fs.readdir(dir)).filter(f => f.startsWith(base) && f.endsWith('.bak'));
  if (files.length > maxVersions) {
    const sorted = files.sort();
    for (let i = 0; i < files.length - maxVersions; i++) {
      await fs.rm(pathMod.join(dir, sorted[i]), { force: true });
    }
  }
}
