"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.once = once;
// Returns a function that can only be called once.
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
