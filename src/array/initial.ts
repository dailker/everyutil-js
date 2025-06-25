/**
 * Gets all but the last element of array.
 * @author dailker
 * @param arr - The array to query.
 * @returns A slice of array excluding the last element.
 */
export function initial<T>(arr: T[]): T[] {
    return arr.slice(0, -1);
}
