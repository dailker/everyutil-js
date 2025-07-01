"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = isNumber;
// Checks if value is a number (not NaN).
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
