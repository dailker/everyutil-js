/**
 * Returns a new array with only unique elements.
 * @author dailker
 * @param arr - The array to process.
 * @returns An array of unique elements.
 */
export function unique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
}
