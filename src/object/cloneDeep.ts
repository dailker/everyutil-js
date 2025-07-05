/**
 * Deeply clones a value (array, object, etc).
 * @author dailker
 * @param value - The value to deeply clone.
 * @returns The deep clone.
 */
export function cloneDeep<T>(value: T): T {
    if (Array.isArray(value)) {
        return value.map(cloneDeep) as any;
    }
    if (value && typeof value === 'object') {
        const result: any = {};
        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                result[key] = cloneDeep((value as any)[key]);
            }
        }
        return result;
    }
    return value;
}
