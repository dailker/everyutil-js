/**
 * Searches a directory for files with identical contents and groups them.
 *
 * @author @dailker
 * @param {string} dir - Directory path.
 * @returns {Promise<string[][]>} Array of groups of duplicate file paths.
 */
export async function findDuplicateFiles(dir: string): Promise<string[][]> {
  const fs = await import('fs/promises');
  const crypto = await import('crypto');
  const path = await import('path');
  const files: string[] = [];
  async function walk(d: string) {
    for (const entry of await fs.readdir(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.isFile()) files.push(full);
    }
  }
  await walk(dir);
  const hashMap: Record<string, string[]> = {};
  for (const file of files) {
    const buf = await fs.readFile(file);
    const hash = crypto.createHash('sha256').update(buf).digest('hex');
    (hashMap[hash] = hashMap[hash] || []).push(file);
  }
  return Object.values(hashMap).filter(g => g.length > 1);
}
