/**
 * Recursively omits keys matching a list or pattern.
 * @author @dailker
 * @param {object} obj
 * @param {string[]|RegExp} keysOrPattern
 * @returns {object}
 */
export function omitDeep(obj: any, keysOrPattern: string[] | RegExp): any {
  if (Array.isArray(obj)) return obj.map(v => omitDeep(v, keysOrPattern));
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([k]) => Array.isArray(keysOrPattern) ? !keysOrPattern.includes(k) : !(keysOrPattern as RegExp).test(k))
        .map(([k, v]) => [k, omitDeep(v, keysOrPattern)])
    );
  }
  return obj;
}
