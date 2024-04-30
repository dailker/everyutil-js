/**
 * Watches a file and triggers callback only if contents actually changed (via checksum).
 *
 * @author @dailker
 * @param {string} path - File path.
 * @param {(changed: boolean) => void} callback - Callback function.
 */
export function watchFileWithChecksum(path: string, callback: (changed: boolean) => void): void {
  const fs = require('fs');
  const crypto = require('crypto');
  let lastHash = '';
  const check = () => {
    const data = fs.readFileSync(path);
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    if (hash !== lastHash) {
      lastHash = hash;
      callback(true);
    } else {
      callback(false);
    }
  };
  fs.watchFile(path, check);
}
