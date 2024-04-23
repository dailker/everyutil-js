/**
 * Searches for files matching a pattern (glob or regex), optionally recursively.
 *
 * @author @dailker
 * @param {string} path - Directory path.
 * @param {{ pattern?: string | RegExp; recursive?: boolean }} [options]
 * @returns {Promise<string[]>} Matching file paths.
 */
export async function findFiles(path: string, options?: { pattern?: string | RegExp; recursive?: boolean }): Promise<string[]> {
  const fs = await import('fs/promises');
  const entries = await fs.readdir(path, { withFileTypes: true });
  let files: string[] = [];
  for (const entry of entries) {
    const fullPath = require('path').join(path, entry.name);
    if (entry.isDirectory() && options?.recursive) {
      files = files.concat(await findFiles(fullPath, options));
    } else if (entry.isFile()) {
      if (!options?.pattern ||
        (typeof options.pattern === 'string' && entry.name.includes(options.pattern)) ||
        (options.pattern instanceof RegExp && options.pattern.test(entry.name))) {
        files.push(fullPath);
      }
    }
  }
  return files;
}
