"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = throttle;
/**
 * Returns a throttled version of the function that only invokes the original function at most once per wait period.
 * @author dailker
 * @param func - The function to throttle.
 * @param wait - The number of milliseconds to throttle invocations to.
 * @returns The throttled function.
 * @category Function
 * @example
 * const throttled = throttle(() => console.log('hi'), 1000);
 */
function throttle(func, wait) {
    let last = 0;
    let timeout;
    return function (...args) {
        const now = Date.now();
        if (now - last >= wait) {
            last = now;
            func.apply(this, args);
        }
        else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                last = Date.now();
                func.apply(this, args);
            }, wait - (now - last));
        }
    };
}
