/**
 * Watches a file for changes and triggers the callback on change events.
 *
 * @author @dailker
 * @param {string} path - The file path.
 * @param {(eventType: string, filename: string) => void} callback - Callback for change events.
 * @returns {import('fs').FSWatcher} The FSWatcher instance.
 */
export function watchFile(path: string, callback: (eventType: string, filename: string) => void): import('fs').FSWatcher {
  const fs = require('fs');
  return fs.watch(path, callback);
}
