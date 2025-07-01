/**
 * Gets the value at path of object.
 * @author dailker
 * @param obj - The object to query.
 * @param path - The path of the property to get.
 * @param defaultValue - The value returned if the resolved value is undefined.
 * @returns The resolved value.
 * @category Object
 * @example
 * get({ a: { b: 2 } }, 'a.b'); // 2
 */
export function get(obj: any, path: string | string[], defaultValue?: any): any {
    if (!obj) return defaultValue;
    const keys = Array.isArray(path) ? path : path.split('.');
    let result = obj;
    for (const key of keys) {
        if (result == null) return defaultValue;
        result = result[key];
    }
    return result === undefined ? defaultValue : result;
}
