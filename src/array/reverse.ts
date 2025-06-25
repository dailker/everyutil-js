// Returns a new array with the elements in reverse order.
export function reverse<T>(array: T[]): T[] {
    if (!Array.isArray(array)) return [];
    return array.slice().reverse();
}
