"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = isFunction;
/**
 * Checks if value is a function.
 * @author dailker
 * @param value - The value to check.
 * @returns True if the value is a function, otherwise false.
 * @category Lang
 * @example
 * isFunction(() => {}); // true
 * isFunction(123); // false
 */
function isFunction(value) {
    return typeof value === 'function';
}
