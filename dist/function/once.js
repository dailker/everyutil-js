"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.once = once;
/**
 * Returns a function that can only be called once. Repeated calls return the first result.
 * @author dailker
 * @param func - The function to restrict.
 * @returns The new restricted function.
 * @category Function
 * @example
 * const initialize = once(() => createApp());
 */
function once(func) {
    let called = false;
    let result;
    return function (...args) {
        if (!called) {
            called = true;
            result = func.apply(this, args);
            return result;
        }
        return result;
    };
}
