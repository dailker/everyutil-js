// src/index.ts

export function isEmpty(value: any): boolean {
    if (value == null) return true;
    if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
}

export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// String Utilities
export function toCamelCase(str: string): string {
    return str.replace(/[-_ ]+(\w)/g, (_, c) => c ? c.toUpperCase() : '');
}

export function toKebabCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
}

export function toSnakeCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/\s+/g, '_')
        .toLowerCase();
}

export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

export function truncate(str: string, length: number, ending = '...'): string {
    if (str.length <= length) return str;
    return str.slice(0, length - ending.length) + ending;
}

// Number Utilities
export function clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
}

export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isEven(num: number): boolean {
    return num % 2 === 0;
}

export function isOdd(num: number): boolean {
    return num % 2 !== 0;
}

export function roundTo(num: number, decimals: number): number {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
}

// Array Utilities
export function unique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
}

export function flatten<T>(arr: any[]): T[] {
    return arr.reduce(
        (flat: T[], toFlatten: any) =>
            flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
        []
    );
}

export function chunk<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

export function compact<T>(arr: T[]): T[] {
    return arr.filter(Boolean);
}

export function difference<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(x => !arr2.includes(x));
}

export function intersection<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(x => arr2.includes(x));
}

export function shuffle<T>(arr: T[]): T[] {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}