"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randArray = randArray;
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
function randomString(len, charset) {
    let s = '';
    for (let i = 0; i < len; i++) {
        s += charset.charAt(randomInt(0, charset.length - 1));
    }
    return s;
}
/**
 * Generates an array of random values of a specified type.
 * @author dailker
 * @param opts - RandArrayOptions for generation.
 * @returns An array of random values.
 * @throws Error if dtype is unsupported or length is invalid.
 */
function randArray(opts) {
    const { length, dtype = 'int', min = 0, max = 100, charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', strMinLen = 5, strMaxLen = 10, boolWeight = 0.5, } = opts;
    if (!Number.isInteger(length) || length < 0)
        throw new Error('length must be a non-negative integer');
    switch (dtype) {
        case 'int':
            return Array.from({ length }, () => randomInt(min, max));
        case 'float':
            return Array.from({ length }, () => randomFloat(min, max));
        case 'bool':
            return Array.from({ length }, () => Math.random() < boolWeight);
        case 'string':
            return Array.from({ length }, () => {
                const l = randomInt(strMinLen, strMaxLen);
                return randomString(l, charset);
            });
        default:
            throw new Error(`Unsupported dtype: ${dtype}`);
    }
}
