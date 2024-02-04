/**
 * Assigns default values for missing keys (non-deep).
 * @author @dailker
 * @param {object} obj
 * @param {object} defaults
 * @returns {object}
 */
export function assignDefaults(obj: object, defaults: object): object {
  return Object.assign({}, defaults, obj);
}
