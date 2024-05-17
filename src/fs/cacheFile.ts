/**
 * Caches a file by copying it to a cache directory, returns cached path.
 *
 * @author @dailker
 * @param {string} filePath - Path to the file.
 * @param {string} cacheDir - Directory to cache into.
 * @returns {Promise<string>} Path to cached file.
 */
export async function cacheFile(filePath: string, cacheDir: string): Promise<string> {
    const fs = await import('fs/promises');
    const path = await import('path');
    await fs.mkdir(cacheDir, { recursive: true });
    const cachedPath = path.join(cacheDir, path.basename(filePath));
    await fs.copyFile(filePath, cachedPath);
    return cachedPath;
}
