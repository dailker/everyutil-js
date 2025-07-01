"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneDeep = cloneDeep;
/**
 * Deeply clones a value (array, object, etc).
 * @author dailker
 * @param value - The value to deeply clone.
 * @returns The deep clone.
 */
function cloneDeep(value) {
    if (Array.isArray(value)) {
        return value.map(cloneDeep);
    }
    if (value && typeof value === 'object') {
        const result = {};
        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                result[key] = cloneDeep(value[key]);
            }
        }
        return result;
    }
    return value;
}
