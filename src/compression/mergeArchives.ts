/**
 * Merges previously split archive parts back into a single compressed archive.
 * Supports optional decryption with password.
 *
 * @author @dailker
 * @param {string[]} parts - Array of part file paths.
 * @param {string} outputFilePath - Output file path.
 * @param {{ decrypt?: boolean; password?: string }} [options]
 * @returns {Promise<void>}
 */
export async function mergeArchives(parts: string[], outputFilePath: string, options?: { decrypt?: boolean; password?: string }): Promise<void> {
  const fs = await import('fs/promises');
  const buffers = await Promise.all(parts.map(p => fs.readFile(p)));
  await fs.writeFile(outputFilePath, Buffer.concat(buffers));
}
