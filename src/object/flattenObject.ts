/**
 * Flattens a nested object into dot-notation keys.
 * @author @dailker
 * @param {object} obj - The object to flatten.
 * @param {string} [prefix]
 * @returns {object}
 */
export function flattenObject(obj: object, prefix = ''): Record<string, any> {
  let result: Record<string, any> = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(result, flattenObject(v, key));
    } else {
      result[key] = v;
    }
  }
  return result;
}
