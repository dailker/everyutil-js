/**
 * Compares two directories and returns a list of file differences.
 *
 * @author @dailker
 * @param {string} src - Source directory.
 * @param {string} dest - Destination directory.
 * @returns {Promise<FileDiff[]>} List of file differences.
 */
export async function compareDirectories(src: string, dest: string): Promise<import('./FileDiff').FileDiff[]> {
    const fs = await import('fs/promises');
    const path = await import('path');
    const walk = async (dir: string): Promise<Record<string, import('fs').Stats>> => {
        const files: Record<string, import('fs').Stats> = {};
        for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) Object.assign(files, await walk(full));
            else files[path.relative(dir, full)] = await fs.stat(full);
        }
        return files;
    };
    const srcFiles = await walk(src);
    const destFiles = await walk(dest);
    const diffs: import('./FileDiff').FileDiff[] = [];
    for (const file in srcFiles) {
        if (!(file in destFiles)) diffs.push({ path: file, type: 'added', srcStat: srcFiles[file] });
        else if (srcFiles[file].mtimeMs !== destFiles[file].mtimeMs || srcFiles[file].size !== destFiles[file].size) {
            diffs.push({ path: file, type: 'modified', srcStat: srcFiles[file], destStat: destFiles[file] });
        }
    }
    for (const file in destFiles) {
        if (!(file in srcFiles)) diffs.push({ path: file, type: 'removed', destStat: destFiles[file] });
    }
    return diffs;
}
