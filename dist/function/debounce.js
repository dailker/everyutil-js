"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = debounce;
/**
 * Returns a debounced version of the function.
 * @author dailker
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to delay.
 * @returns The debounced function.
 * @category Function
 * @example
 * const debounced = debounce(() => console.log('hi'), 300);
 */
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
