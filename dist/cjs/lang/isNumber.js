"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = isNumber;
/**
 * Checks if value is a number (not NaN).
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is a number and not NaN, otherwise false.
 * @category Lang
 * @example
 * isNumber(123); // true
 * isNumber(NaN); // false
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
