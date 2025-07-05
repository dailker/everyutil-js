/**
 * Returns a new object with only the provided keys.
 * @author dailker
 * @param obj - The source object.
 * @param keys - The keys to pick from the object.
 * @returns A new object with only the specified keys.
 * @category Object
 * @example
 * pick({ a: 1, b: 2 }, ['a']); // { a: 1 }
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    if (!obj) return {} as Pick<T, K>;
    const result = {} as Pick<T, K>;
    for (const key of keys) {
        if (key in obj) result[key] = obj[key];
    }
    return result;
}
