/**
 * Writes a file with versioning, saving older versions as backups with timestamps.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {string | Buffer} data - Data to write.
 * @param {{ maxVersions?: number }} [options]
 * @returns {Promise<void>}
 */
export async function writeVersionedFile(path: string, data: string | Buffer, options?: { maxVersions?: number }): Promise<void> {
  const fs = await import('fs/promises');
  const pathMod = await import('path');
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const backup = `${path}.${ts}.bak`;
  try { await fs.copyFile(path, backup); } catch {}
  await fs.writeFile(path, data);
  if (options?.maxVersions) {
    const dir = pathMod.dirname(path);
    const base = pathMod.basename(path);
    const files = (await fs.readdir(dir)).filter(f => f.startsWith(base) && f.endsWith('.bak'));
    if (files.length > options.maxVersions) {
      const sorted = files.sort();
      for (let i = 0; i < files.length - options.maxVersions; i++) {
        await fs.rm(pathMod.join(dir, sorted[i]), { force: true });
      }
    }
  }
}
