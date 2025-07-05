/**
 * Returns a new object omitting the provided keys.
 * @author dailker
 * @param obj - The source object.
 * @param keys - The keys to omit from the object.
 * @returns A new object without the specified keys.
 * @category Object
 * @example
 * omit({ a: 1, b: 2 }, ['a']); // { b: 2 }
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    if (!obj) return {} as Omit<T, K>;
    const result = { ...obj };
    for (const key of keys) {
        delete result[key];
    }
    return result;
}
