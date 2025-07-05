"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = toCamelCase;
/**
 * Converts a string to camelCase.
 * @author dailker
 * @param str - The string to convert.
 * @returns The camelCase string.
 */
function toCamelCase(str) {
    return str.replace(/[-_ ]+(\w)/g, (_, c) => c ? c.toUpperCase() : '');
}
