// Returns a new array with elements taken from the end while predicate returns truthy.
export function takeRightWhile<T>(array: T[], predicate: (value: T, index: number, array: T[]) => boolean): T[] {
    if (!Array.isArray(array)) return [];
    let i = array.length;
    while (i-- && predicate(array[i], i, array)) {}
    return array.slice(i + 1);
}
