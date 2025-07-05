"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toKebabCase = toKebabCase;
/**
 * Converts a string to kebab-case.
 * @author dailker
 * @param str - The string to convert.
 * @returns The kebab-case string.
 */
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
}
