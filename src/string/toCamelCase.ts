/**
 * Converts a string to camelCase.
 * @author dailker
 * @param str - The string to convert.
 * @returns The camelCase string.
 */
export function toCamelCase(str: string): string {
    return str.replace(/[-_ ]+(\w)/g, (_, c) => c ? c.toUpperCase() : '');
}
