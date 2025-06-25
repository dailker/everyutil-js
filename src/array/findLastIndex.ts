/**
 * Returns the index of the last element predicate returns truthy for.
 * @author dailker
 * @param arr - The array to search.
 * @param predicate - The function invoked per iteration.
 * @returns The index of the found element, else -1.
 */
export function findLastIndex<T>(arr: T[], predicate: (value: T, index: number, array: T[]) => boolean): number {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (predicate(arr[i], i, arr)) return i;
    }
    return -1;
}
