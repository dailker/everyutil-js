// Returns the first n elements of array.
export function take<T>(array: T[], n = 1): T[] {
    if (!Array.isArray(array) || n <= 0) return [];
    return array.slice(0, n);
}
