"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSnakeCase = toSnakeCase;
/**
 * Converts a string to snake_case.
 * @author dailker
 * @param str - The string to convert.
 * @returns The snake_case string.
 */
function toSnakeCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/\s+/g, '_')
        .toLowerCase();
}
