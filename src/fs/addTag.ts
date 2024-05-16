/**
 * Adds a user-defined tag to a file's metadata.
 *
 * @author @dailker
 * @param {string} filePath - The path to the file.
 * @param {string} tag - The tag to add.
 * @returns {Promise<void>} Resolves when the tag is added.
 */
export async function addTag(filePath: string, tag: string): Promise<void> {
    const meta = await (await import('./readMetadata')).readMetadata(filePath);
    if (!meta.tags) meta.tags = [];
    if (!meta.tags.includes(tag)) meta.tags.push(tag);
    await (await import('./writeMetadata')).writeMetadata(filePath, meta);
}
