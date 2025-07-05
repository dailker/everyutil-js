"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = debounce;
// Returns a debounced version of the function.
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
