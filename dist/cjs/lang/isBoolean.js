"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = isBoolean;
/**
 * Checks if a value is a boolean.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is a boolean, otherwise false.
 * @category Lang
 * @example
 * isBoolean(true); // true
 * isBoolean('false'); // false
 */
// Checks if value is a boolean.
function isBoolean(value) {
    return typeof value === 'boolean';
}
