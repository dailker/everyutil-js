/**
 * Synchronizes two directories, copying new/changed files and optionally deleting extras.
 *
 * @author @dailker
 * @param {string} src - Source directory.
 * @param {string} dest - Destination directory.
 * @param {SyncOptions} [options] - Sync options.
 * @returns {Promise<void>} Resolves when sync is complete.
 */
export async function syncDirectories(src: string, dest: string, options?: import('./SyncOptions').SyncOptions): Promise<void> {
    const fs = await import('fs/promises');
    const path = await import('path');
    options = options || {};
    async function walk(dir: string): Promise<string[]> {
        let files: string[] = [];
        for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) files = files.concat(await walk(full));
            else files.push(full);
        }
        return files;
    }
    const srcFiles = await walk(src);
    const rel = (f: string) => path.relative(src, f);
    for (const file of srcFiles) {
        if (options.filter && !options.filter(file)) continue;
        const relPath = rel(file);
        const destPath = path.join(dest, relPath);
        await fs.mkdir(path.dirname(destPath), { recursive: true });
        await fs.copyFile(file, destPath);
    }
    if (options.deleteExtra) {
        const destFiles = await walk(dest);
        for (const file of destFiles) {
            const relPath = path.relative(dest, file);
            if (!srcFiles.map(rel).includes(relPath)) {
                await fs.rm(file, { force: true, recursive: true });
            }
        }
    }
}
