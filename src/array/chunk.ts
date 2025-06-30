/**
 * Splits an array into chunks of a specified size.
 * @author dailker
 * @param arr - The array to chunk.
 * @param size - The size of each chunk.
 * @returns An array of chunks.
 */
export function chunk<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
