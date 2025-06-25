// Returns the union of arrays, removing duplicates.
export function union<T>(...arrays: T[][]): T[] {
    const set = new Set<T>();
    for (const arr of arrays) {
        if (Array.isArray(arr)) {
            for (const item of arr) set.add(item);
        }
    }
    return Array.from(set);
}
