// Returns a new array with elements taken from the start while predicate returns truthy.
export function takeWhile<T>(array: T[], predicate: (value: T, index: number, array: T[]) => boolean): T[] {
    if (!Array.isArray(array)) return [];
    let i = 0;
    while (i < array.length && predicate(array[i], i, array)) i++;
    return array.slice(0, i);
}
