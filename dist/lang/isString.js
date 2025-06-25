"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = isString;
/**
 * Checks if value is a string.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is a string, otherwise false.
 * @category Lang
 * @example
 * isString('hello'); // true
 * isString(123); // false
 */
function isString(value) {
    return typeof value === 'string';
}
