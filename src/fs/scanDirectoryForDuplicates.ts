/**
 * Scans a directory for duplicate files by comparing file hashes.
 *
 * @author @dailker
 * @param {string} dir - Directory to scan.
 * @param {string} [algorithm='sha256'] - Hash algorithm.
 * @returns {Promise<string[][]>} Array of arrays of duplicate file paths.
 */
export async function scanDirectoryForDuplicates(dir: string, algorithm: string = 'sha256'): Promise<string[][]> {
    const fs = await import('fs/promises');
    const path = await import('path');
    const { generateChecksum } = await import('./generateChecksum');
    async function walk(d: string): Promise<string[]> {
        let files: string[] = [];
        for (const entry of await fs.readdir(d, { withFileTypes: true })) {
            const full = path.join(d, entry.name);
            if (entry.isDirectory()) files = files.concat(await walk(full));
            else files.push(full);
        }
        return files;
    }
    const allFiles = await walk(dir);
    const hashMap: Record<string, string[]> = {};
    for (const file of allFiles) {
        const hash = await generateChecksum(file, algorithm as any);
        if (!hashMap[hash]) hashMap[hash] = [];
        hashMap[hash].push(file);
    }
    return Object.values(hashMap).filter(arr => arr.length > 1);
}
