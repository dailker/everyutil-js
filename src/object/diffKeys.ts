/**
 * Gets keys present in one object but missing in another.
 * @author @dailker
 * @param {object} a
 * @param {object} b
 * @returns {string[]}
 */
export function diffKeys(a: object, b: object): string[] {
  return Object.keys(a).filter(k => !(k in b));
}
