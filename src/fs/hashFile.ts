/**
 * Generates a content hash of a file for deduplication or verification.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {'sha256' | 'md5'} [algorithm='sha256']
 * @returns {Promise<string>} File hash.
 */
export async function hashFile(path: string, algorithm: 'sha256' | 'md5' = 'sha256'): Promise<string> {
  const fs = await import('fs');
  const crypto = await import('crypto');
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash(algorithm);
    const stream = fs.createReadStream(path);
    stream.on('data', d => hash.update(d));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
}
