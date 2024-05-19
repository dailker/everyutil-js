/**
 * Converts an image file to a different format (png, jpeg, webp).
 *
 * @author @dailker
 * @param {string} filePath - Path to the image file.
 * @param {'png' | 'jpeg' | 'webp'} outputFormat - Output image format.
 * @returns {Promise<void>} Resolves when conversion is complete.
 */
export async function convertImageFormat(filePath: string, outputFormat: 'png' | 'jpeg' | 'webp'): Promise<void> {
    const sharp = await import('sharp');
    const path = await import('path');
    const outPath = path.format({ ...path.parse(filePath), base: undefined, ext: '.' + outputFormat });
    await sharp.default(filePath)[outputFormat]().toFile(outPath);
}
