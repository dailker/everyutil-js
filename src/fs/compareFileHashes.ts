/**
 * Compares the hashes of two files for equality.
 *
 * @author @dailker
 * @param {string} file1 - Path to the first file.
 * @param {string} file2 - Path to the second file.
 * @returns {Promise<boolean>} True if hashes match, else false.
 */
export async function compareFileHashes(file1: string, file2: string): Promise<boolean> {
    const { generateChecksum } = await import('./generateChecksum');
    const [hash1, hash2] = await Promise.all([
        generateChecksum(file1, 'sha256'),
        generateChecksum(file2, 'sha256')
    ]);
    return hash1 === hash2;
}
