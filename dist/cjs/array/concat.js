"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = concat;
/**
 * Concatenates the array with any additional arrays and/or values.
 * Flattens only one level.
 * @author dailker
 * @param arr - The initial array.
 * @param values - Additional arrays or values.
 * @returns The concatenated array.
 */
function concat(arr, ...values) {
    const result = arr.slice();
    for (const val of values) {
        if (Array.isArray(val)) {
            result.push(...val);
        }
        else {
            result.push(val);
        }
    }
    return result;
}
