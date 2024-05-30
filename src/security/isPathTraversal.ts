/**
 * Detects path traversal patterns (../, ..\\, etc).
 *
 * @author @dailker
 * @param {string} path - The path to check.
 * @returns {boolean} True if traversal detected.
 */
export function isPathTraversal(path: string): boolean {
    return /\.\.[/\\]/.test(path);
}
