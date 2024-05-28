/**
 * Escapes shell arguments to prevent command injection.
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string} The safely escaped shell argument.
 */
export function escapeShellArg(str: string): string {
    if (process.platform === 'win32') {
        return '"' + str.replace(/(["%])/g, '^$1') + '"';
    }
    return "'" + str.replace(/'/g, "'\\''") + "'";
}
