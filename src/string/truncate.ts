/**
 * Truncates a string to a specified length and appends an ending if needed.
 * @author dailker
 * @param str - The string to truncate.
 * @param length - The maximum length of the result string.
 * @param ending - The string to append if truncation occurs (default: '...').
 * @returns The truncated string.
 */
export function truncate(str: string, length: number, ending = '...'): string {
    if (str.length <= length) return str;
    return str.slice(0, length - ending.length) + ending;
}
