/**
 * Returns the intersection of two arrays.
 * @author dailker
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns Elements present in both arrays.
 */
export function intersection<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(x => arr2.includes(x));
}
