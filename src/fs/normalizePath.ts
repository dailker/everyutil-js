/**
 * Normalizes file paths to remove redundant separators and relative references.
 *
 * @author @dailker
 * @param {string} pathStr - The file path.
 * @returns {string} The normalized path.
 */
export function normalizePath(pathStr: string): string {
  const path = require('path');
  return path.normalize(pathStr);
}
