// Returns the unique values from a sorted array using an iteratee.
export function sortedUniqBy<T, U>(array: T[], iteratee: (value: T) => U): T[] {
    if (!Array.isArray(array) || array.length === 0) return [];
    const result = [array[0]];
    let prev = iteratee(array[0]);
    for (let i = 1; i < array.length; i++) {
        const computed = iteratee(array[i]);
        if (computed !== prev) {
            result.push(array[i]);
            prev = computed;
        }
    }
    return result;
}
