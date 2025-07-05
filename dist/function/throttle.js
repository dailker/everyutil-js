"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = throttle;
// Returns a throttled version of the function.
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
