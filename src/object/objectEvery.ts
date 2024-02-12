/**
 * Like Array.every, but for object values.
 * @author @dailker
 * @param {object} obj
 * @param {(value: any, key: string) => boolean} predicate
 * @returns {boolean}
 */
export function objectEvery(obj: object, predicate: (value: any, key: string) => boolean): boolean {
  return Object.entries(obj).every(([k, v]) => predicate(v, k));
}
