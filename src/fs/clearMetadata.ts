/**
 * Clears all extended metadata and tags from a file.
 *
 * @author @dailker
 * @param {string} filePath - The path to the file.
 * @returns {Promise<void>} Resolves when metadata is cleared.
 */
export async function clearMetadata(filePath: string): Promise<void> {
    const metaPath = filePath + '.meta.json';
    await import('fs/promises').then(fs => fs.rm(metaPath, { force: true }));
}
