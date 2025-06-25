/**
 * Creates an object from an array of key-value pairs.
 * @author dailker
 * @param pairs - The array of key-value pairs.
 * @returns The composed object.
 */
export function fromPairs<K extends string | number | symbol, V>(pairs: [K, V][]): Record<K, V> {
    const result = {} as Record<K, V>;
    for (const [key, value] of pairs) {
        result[key] = value;
    }
    return result;
}
