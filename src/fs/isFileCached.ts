/**
 * Checks if a file is cached in the cache directory.
 *
 * @author @dailker
 * @param {string} filePath - Path to the file.
 * @param {string} cacheDir - Directory to check.
 * @returns {Promise<boolean>} True if cached, else false.
 */
export async function isFileCached(filePath: string, cacheDir: string): Promise<boolean> {
    const fs = await import('fs/promises');
    const path = await import('path');
    try {
        await fs.access(path.join(cacheDir, path.basename(filePath)));
        return true;
    } catch {
        return false;
    }
}
