"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNull = isNull;
/**
 * Checks if value is null.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is null, otherwise false.
 * @category Lang
 * @example
 * isNull(null); // true
 * isNull(undefined); // false
 */
function isNull(value) {
    return value === null;
}
