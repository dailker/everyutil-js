/**
 * Removes all falsy values from an array.
 * @author dailker
 * @param arr - The array to compact.
 * @returns A new array with falsy values removed.
 */
export function compact<T>(arr: T[]): T[] {
    return arr.filter(Boolean);
}
