"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = isObject;
// Checks if value is an object (not null).
function isObject(value) {
    return typeof value === 'object' && value !== null;
}
