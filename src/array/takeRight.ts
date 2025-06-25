// Returns the last n elements of array.
export function takeRight<T>(array: T[], n = 1): T[] {
    if (!Array.isArray(array) || n <= 0) return [];
    return array.slice(-n);
}
