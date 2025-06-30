// src/index.ts
export function isEmpty(value) {
    if (value == null)
        return true;
    if (Array.isArray(value) || typeof value === 'string')
        return value.length === 0;
    if (typeof value === 'object')
        return Object.keys(value).length === 0;
    return false;
}
export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
export function capitalize(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// String Utilities
export function toCamelCase(str) {
    return str.replace(/[-_ ]+(\w)/g, (_, c) => c ? c.toUpperCase() : '');
}
export function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
}
export function toSnakeCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/\s+/g, '_')
        .toLowerCase();
}
export function reverseString(str) {
    return str.split('').reverse().join('');
}
export function truncate(str, length, ending = '...') {
    if (str.length <= length)
        return str;
    return str.slice(0, length - ending.length) + ending;
}
// Number Utilities
export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function isEven(num) {
    return num % 2 === 0;
}
export function isOdd(num) {
    return num % 2 !== 0;
}
export function roundTo(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
}
// Array Utilities
export function unique(arr) {
    return Array.from(new Set(arr));
}
export function flatten(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
}
export function chunk(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
export function compact(arr) {
    return arr.filter(Boolean);
}
export function difference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}
export function intersection(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x));
}
export function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
