/**
 * Like Array.some, but for object values.
 * @author @dailker
 * @param {object} obj
 * @param {(value: any, key: string) => boolean} predicate
 * @returns {boolean}
 */
export function objectSome(obj: object, predicate: (value: any, key: string) => boolean): boolean {
  return Object.entries(obj).some(([k, v]) => predicate(v, k));
}
