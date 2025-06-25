// Returns the tail of the array (all but the first element).
export function tail<T>(array: T[]): T[] {
    if (!Array.isArray(array)) return [];
    return array.slice(1);
}
