// Returns the unique values from a sorted array.
export function sortedUniq<T>(array: T[]): T[] {
    if (!Array.isArray(array) || array.length === 0) return [];
    const result = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i - 1]) result.push(array[i]);
    }
    return result;
}
