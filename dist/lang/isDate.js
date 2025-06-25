"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = isDate;
/**
 * Checks if value is a Date object.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is a Date object, otherwise false.
 * @category Lang
 * @example
 * isDate(new Date()); // true
 * isDate('2020-01-01'); // false
 */
function isDate(value) {
    return value instanceof Date;
}
