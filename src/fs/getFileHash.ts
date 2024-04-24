/**
 * Calculates a cryptographic hash of a file, useful for integrity checks.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {'sha256' | 'md5' | 'sha1'} [algorithm='sha256']
 * @returns {Promise<string>} File hash.
 */
export async function getFileHash(path: string, algorithm: 'sha256' | 'md5' | 'sha1' = 'sha256'): Promise<string> {
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
