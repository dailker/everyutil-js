/**
 * Lists all tags associated with a file.
 *
 * @author @dailker
 * @param {string} filePath - The path to the file.
 * @returns {Promise<string[]>} Resolves with an array of tags.
 */
export async function listTags(filePath: string): Promise<string[]> {
    const meta = await (await import('./readMetadata')).readMetadata(filePath);
    return Array.isArray(meta.tags) ? meta.tags : [];
}
