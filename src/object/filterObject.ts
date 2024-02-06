/**
 * Filters an object's keys by a predicate on values or keys.
 * @author @dailker
 * @param {object} obj
 * @param {(value: any, key: string) => boolean} predicate
 * @returns {object}
 */
export function filterObject(obj: object, predicate: (value: any, key: string) => boolean): object {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => predicate(v, k)));
}
