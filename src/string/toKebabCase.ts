/**
 * Converts a string to kebab-case.
 * @author dailker
 * @param str - The string to convert.
 * @returns The kebab-case string.
 */
export function toKebabCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
}
