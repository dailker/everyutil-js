/**
 * Safely gets nested values by path string/array (like lodash _.get).
 * @author @dailker
 * @param {object} obj
 * @param {string|string[]} path
 * @param {any} [defaultValue]
 * @returns {any}
 */
export function getNestedValue(obj: any, path: string | string[], defaultValue?: any): any {
  const keys = Array.isArray(path) ? path : path.split('.');
  return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj) ?? defaultValue;
}
