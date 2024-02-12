/**
 * Minimal, JSON-schema-like shape validator (e.g., {a: 'string', b: 'number'}).
 * @author @dailker
 * @param {object} obj
 * @param {object} schema
 * @returns {boolean}
 */
export function objectSchemaValidator(obj: any, schema: any): boolean {
  for (const k in schema) {
    if (!(k in obj)) return false;
    if (typeof schema[k] === 'string') {
      if (typeof obj[k] !== schema[k]) return false;
    } else if (typeof schema[k] === 'object') {
      if (!objectSchemaValidator(obj[k], schema[k])) return false;
    }
  }
  return true;
}
