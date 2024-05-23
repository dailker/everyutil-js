/**
 * Writes custom metadata or tags to a file.
 *
 * @author @dailker
 * @param {string} filePath - The path to the file.
 * @param {Record<string, any>} metadata - The metadata object to write.
 * @returns {Promise<void>} Resolves when writing is complete.
 */
export async function writeMetadata(filePath: string, metadata: Record<string, any>): Promise<void> {
    const metaPath = filePath + '.meta.json';
    await import('fs/promises').then(fs => fs.writeFile(metaPath, JSON.stringify(metadata, null, 2), 'utf8'));
}
