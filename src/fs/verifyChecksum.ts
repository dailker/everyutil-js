/**
 * Verifies a file's checksum against an expected value.
 *
 * @author @dailker
 * @param {string} filePath - Path to the file.
 * @param {string} expectedChecksum - The expected checksum value.
 * @param {string} algorithm - Hash algorithm.
 * @returns {Promise<boolean>} True if checksum matches, else false.
 */
export async function verifyChecksum(filePath: string, expectedChecksum: string, algorithm: string): Promise<boolean> {
    const { generateChecksum } = await import('./generateChecksum');
    const actual = await generateChecksum(filePath, algorithm as any);
    return actual === expectedChecksum;
}
