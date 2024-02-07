/**
 * Recursively map all key paths to their value types.
 * @author @dailker
 * @param {object} obj
 * @param {string[]} [prefix=[]]
 * @returns {object}
 */
export function getTypeMap(obj: any, prefix: string[] = []): Record<string, string> {
  let map: Record<string, string> = {};
  for (const k in obj) {
    const path = [...prefix, k].join('.');
    if (obj[k] && typeof obj[k] === 'object') {
      Object.assign(map, getTypeMap(obj[k], [...prefix, k]));
    } else {
      map[path] = typeof obj[k];
    }
  }
  return map;
}
