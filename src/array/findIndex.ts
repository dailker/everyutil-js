/**
 * Returns the index of the first element predicate returns truthy for.
 * @author dailker
 * @param arr - The array to search.
 * @param predicate - The function invoked per iteration.
 * @returns The index of the found element, else -1.
 */
export function findIndex<T>(arr: T[], predicate: (value: T, index: number, array: T[]) => boolean): number {
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i, arr)) return i;
    }
    return -1;
}
