/**
 * Finds files in a directory (recursively) matching a specific tag.
 *
 * @author @dailker
 * @param {string} directory - The directory to search.
 * @param {string} tag - The tag to search for.
 * @returns {Promise<string[]>} Resolves with an array of file paths.
 */
export async function searchByTag(directory: string, tag: string): Promise<string[]> {
    const { readdir, stat } = await import('fs/promises');
    const path = await import('path');
    let results: string[] = [];
    async function walk(dir: string) {
        const files = await readdir(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const fileStat = await stat(fullPath);
            if (fileStat.isDirectory()) {
                await walk(fullPath);
            } else if (!file.endsWith('.meta.json')) {
                const meta = await (await import('./readMetadata')).readMetadata(fullPath);
                if (Array.isArray(meta.tags) && meta.tags.includes(tag)) {
                    results.push(fullPath);
                }
            }
        }
    }
    await walk(directory);
    return results;
}
