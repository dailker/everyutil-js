/**
 * Watches file stats changes like size or modification date.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {(currStats: import('fs').Stats, prevStats: import('fs').Stats) => void} callback
 */
export function watchFileChanges(path: string, callback: (currStats: import('fs').Stats, prevStats: import('fs').Stats) => void): void {
  const fs = require('fs');
  fs.watchFile(path, callback);
}
