/**
 * Returns a list of files in a directory, optionally recursive and filtered by file extension.
 *
 * @author @dailker
 * @param {string} dirPath - The directory path.
 * @param {{ recursive?: boolean, extensionFilter?: string[] }} [options] - Options.
 * @returns {Promise<string[]>} List of file paths.
 */
export async function listFiles(dirPath: string, options?: { recursive?: boolean, extensionFilter?: string[] }): Promise<string[]> {
  const fs = await import('fs/promises');
  const path = await import('path');
  let files: string[] = [];
  for (const entry of await fs.readdir(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory() && options?.recursive) {
      files = files.concat(await listFiles(fullPath, options));
    } else if (entry.isFile()) {
      if (!options?.extensionFilter || options.extensionFilter.some(ext => entry.name.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  return files;
}
