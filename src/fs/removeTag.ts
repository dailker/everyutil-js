/**
 * Removes a specific tag from a file's metadata.
 *
 * @author @dailker
 * @param {string} filePath - The path to the file.
 * @param {string} tag - The tag to remove.
 * @returns {Promise<void>} Resolves when the tag is removed.
 */
export async function removeTag(filePath: string, tag: string): Promise<void> {
    const meta = await (await import('./readMetadata')).readMetadata(filePath);
    if (!meta.tags) return;
    meta.tags = meta.tags.filter((t: string) => t !== tag);
    await (await import('./writeMetadata')).writeMetadata(filePath, meta);
}
