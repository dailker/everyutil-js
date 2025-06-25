// Returns unique elements, using the result of iteratee for comparison.
export function uniqBy<T, U>(arr: T[], iteratee: (item: T) => U): T[] {
    const seen = new Set<U>();
    return arr.filter(item => {
        const val = iteratee(item);
        if (seen.has(val)) return false;
        seen.add(val);
        return true;
    });
}
