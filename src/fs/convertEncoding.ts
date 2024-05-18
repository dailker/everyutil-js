/**
 * Converts a file's encoding from one to another.
 *
 * @author @dailker
 * @param {string} filePath - Path to the file.
 * @param {string} fromEncoding - Source encoding.
 * @param {string} toEncoding - Target encoding.
 * @returns {Promise<void>} Resolves when conversion is complete.
 */
export async function convertEncoding(filePath: string, fromEncoding: string, toEncoding: string): Promise<void> {
    const fs = await import('fs/promises');
    const iconv = await import('iconv-lite');
    const buf = await fs.readFile(filePath);
    const decoded = iconv.decode(buf, fromEncoding);
    const encoded = iconv.encode(decoded, toEncoding);
    await fs.writeFile(filePath, encoded);
}
