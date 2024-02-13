/**
 * General purpose transform where you can map keys and values simultaneously.
 * @author @dailker
 * @param {object} obj
 * @param {(key: string, value: any) => [string, any]} fn
 * @returns {object}
 */
export function objectTransform(obj: object, fn: (key: string, value: any) => [string, any]): object {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => fn(k, v)));
}
