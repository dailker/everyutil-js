/**
 * Gets the last index at which a given element can be found in the array.
 * @author dailker
 * @param arr - The array to search.
 * @param value - The value to search for.
 * @returns The last index of the found element, else -1.
 */
export function lastIndexOf<T>(arr: T[], value: T): number {
    return arr.lastIndexOf(value);
}
