/**
 * Clears all files in a cache directory.
 *
 * @author @dailker
 * @param {string} dir - Cache directory.
 * @returns {Promise<void>} Resolves when cache is cleared.
 */
export async function clearCache(dir: string): Promise<void> {
    const fs = await import('fs/promises');
    for (const file of await fs.readdir(dir)) {
        await fs.rm(require('path').join(dir, file), { recursive: true, force: true });
    }
}
