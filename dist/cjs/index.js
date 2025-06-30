"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = isEmpty;
exports.deepClone = deepClone;
exports.capitalize = capitalize;
exports.toCamelCase = toCamelCase;
exports.toKebabCase = toKebabCase;
exports.toSnakeCase = toSnakeCase;
exports.reverseString = reverseString;
exports.truncate = truncate;
exports.clamp = clamp;
exports.randomInt = randomInt;
exports.isEven = isEven;
exports.isOdd = isOdd;
exports.roundTo = roundTo;
exports.unique = unique;
exports.flatten = flatten;
exports.chunk = chunk;
exports.compact = compact;
exports.difference = difference;
exports.intersection = intersection;
exports.shuffle = shuffle;
function isEmpty(value) {
    if (value == null)
        return true;
    if (Array.isArray(value) || typeof value === 'string')
        return value.length === 0;
    if (typeof value === 'object')
        return Object.keys(value).length === 0;
    return false;
}
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function capitalize(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// String Utilities
function toCamelCase(str) {
    return str.replace(/[-_ ]+(\w)/g, (_, c) => c ? c.toUpperCase() : '');
}
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
}
function toSnakeCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/\s+/g, '_')
        .toLowerCase();
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
function truncate(str, length, ending = '...') {
    if (str.length <= length)
        return str;
    return str.slice(0, length - ending.length) + ending;
}
// Number Utilities
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isEven(num) {
    return num % 2 === 0;
}
function isOdd(num) {
    return num % 2 !== 0;
}
function roundTo(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
}
// Array Utilities
function unique(arr) {
    return Array.from(new Set(arr));
}
function flatten(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
}
function chunk(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
function compact(arr) {
    return arr.filter(Boolean);
}
function difference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}
function intersection(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x));
}
function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
