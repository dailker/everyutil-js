/**
 * Escapes an array of arguments for safe shell use.
 *
 * @author @dailker
 * @param {string[]} args - The arguments to escape.
 * @returns {string} The safely escaped command string.
 */
export function escapeCommandArgs(args: string[]): string {
    return args.map(arg => `'${arg.replace(/'/g, `'\\''`)}'`).join(' ');
}
