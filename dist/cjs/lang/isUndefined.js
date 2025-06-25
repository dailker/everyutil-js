"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = isUndefined;
/**
 * Checks if value is undefined.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is undefined, otherwise false.
 * @category Lang
 * @example
 * isUndefined(undefined); // true
 * isUndefined(null); // false
 */
function isUndefined(value) {
    return value === undefined;
}
