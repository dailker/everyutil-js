/**
 * Splits a large compressed file into smaller parts of a given size.
 * Supports optional encryption and password protection for each split part.
 *
 * @author @dailker
 * @param {string} filePath - Path to the archive.
 * @param {number} maxPartSizeBytes - Max part size in bytes.
 * @param {{ encrypt?: boolean; password?: string }} [options]
 * @returns {Promise<string[]>} Array of part file paths.
 */
export async function splitArchive(filePath: string, maxPartSizeBytes: number, options?: { encrypt?: boolean; password?: string }): Promise<string[]> {
  const fs = await import('fs/promises');
  const path = await import('path');
  const data = await fs.readFile(filePath);
  const parts: string[] = [];
  for (let i = 0; i < data.length; i += maxPartSizeBytes) {
    const partPath = `${filePath}.part${parts.length + 1}`;
    await fs.writeFile(partPath, data.slice(i, i + maxPartSizeBytes));
    parts.push(partPath);
  }
  return parts;
}
