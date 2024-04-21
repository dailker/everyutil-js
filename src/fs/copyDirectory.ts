/**
 * Copies an entire directory recursively.
 *
 * @author @dailker
 * @param {string} srcDir - Source directory.
 * @param {string} destDir - Destination directory.
 * @param {{ overwrite?: boolean }} [options]
 * @returns {Promise<void>}
 */
export async function copyDirectory(srcDir: string, destDir: string, options?: { overwrite?: boolean }): Promise<void> {
  const fs = await import('fs/promises');
  const path = await import('path');
  await fs.mkdir(destDir, { recursive: true });
  for (const entry of await fs.readdir(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath, options);
    } else if (entry.isFile()) {
      if (options?.overwrite) {
        try { await fs.rm(destPath, { force: true }); } catch {}
      }
      await fs.copyFile(srcPath, destPath);
    }
  }
}
