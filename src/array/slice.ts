// Returns a new array with the elements from start up to, but not including, end.
export function slice<T>(array: T[], start?: number, end?: number): T[] {
    if (!Array.isArray(array)) return [];
    return array.slice(start, end);
}
