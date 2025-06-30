/**
 * Reverses a string.
 * @author dailker
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}
