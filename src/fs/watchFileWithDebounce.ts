/**
 * Watches a file but debounces rapid changes, calling the callback only once after inactivity.
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {number} debounceMs - Debounce time in ms.
 * @param {() => void} callback - Callback function.
 */
export function watchFileWithDebounce(path: string, debounceMs: number, callback: () => void): void {
  const fs = require('fs');
  let timeout: NodeJS.Timeout | null = null;
  fs.watch(path, () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(callback, debounceMs);
  });
}
