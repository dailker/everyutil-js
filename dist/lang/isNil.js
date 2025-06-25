"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNil = isNil;
/**
 * Checks if value is null or undefined.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is null or undefined, otherwise false.
 * @category Lang
 * @example
 * isNil(null); // true
 * isNil(undefined); // true
 * isNil(0); // false
 */
function isNil(value) {
    return value == null;
}
