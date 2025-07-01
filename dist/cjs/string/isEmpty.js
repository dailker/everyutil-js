"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = isEmpty;
/**
 * Checks if a value is empty (null, undefined, empty string, empty array, or empty object).
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is empty, false otherwise.
 */
function isEmpty(value) {
    if (value == null)
        return true;
    if (Array.isArray(value) || typeof value === 'string')
        return value.length === 0;
    if (typeof value === 'object')
        return Object.keys(value).length === 0;
    return false;
}
