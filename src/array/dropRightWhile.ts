/**
 * Creates a slice of array with n elements dropped from the end while predicate returns truthy.
 * @author dailker
 * @param arr - The array to query.
 * @param predicate - The function invoked per iteration.
 * @returns The slice of array.
 */
export function dropRightWhile<T>(arr: T[], predicate: (value: T, index: number, array: T[]) => boolean): T[] {
    let i = arr.length;
    while (i-- && predicate(arr[i], i, arr)) {}
    return arr.slice(0, i + 1);
}
