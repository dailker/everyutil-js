/**
 * Generates a checksum for a file using the specified algorithm.
 *
 * @author @dailker
 * @param {string} filePath - Path to the file.
 * @param {'md5' | 'sha1' | 'sha256'} algorithm - Hash algorithm.
 * @returns {Promise<string>} The file checksum.
 */
export async function generateChecksum(filePath: string, algorithm: 'md5' | 'sha1' | 'sha256'): Promise<string> {
    const fs = await import('fs');
    const crypto = await import('crypto');
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash(algorithm);
        const stream = fs.createReadStream(filePath);
        stream.on('data', chunk => hash.update(chunk));
        stream.on('end', () => resolve(hash.digest('hex')));
        stream.on('error', reject);
    });
}
