/**
 * Checks if a value is a plain object (not class, array, etc.).
 * @author @dailker
 * @param {any} val
 * @returns {boolean}
 */
export function isPlainObject(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Object]';
}
