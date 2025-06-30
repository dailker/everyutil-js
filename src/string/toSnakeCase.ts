/**
 * Converts a string to snake_case.
 * @author dailker
 * @param str - The string to convert.
 * @returns The snake_case string.
 */
export function toSnakeCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/\s+/g, '_')
        .toLowerCase();
}
