/**
 * Returns the difference between two arrays.
 * @author dailker
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns Elements in arr1 not present in arr2.
 */
export function difference<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(x => !arr2.includes(x));
}
