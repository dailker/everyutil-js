/**
 * Returns the difference between arrays, using an iteratee to compute comparison values.
 * @author dailker
 * @param arr - The array to inspect.
 * @param others - The arrays to compare against.
 * @param iteratee - The iteratee invoked per element.
 * @returns Elements in arr not present in others, compared by iteratee.
 */
export function differenceBy<T, U>(arr: T[], others: T[][], iteratee: (item: T) => U): T[] {
    const exclude = new Set(others.flat().map(iteratee));
    return arr.filter(x => !exclude.has(iteratee(x)));
}
