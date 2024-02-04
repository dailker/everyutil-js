/**
 * Flattens values with nesting but keeps keys (e.g., {a:{b:1}} → {a_b:1}).
 * @author @dailker
 * @param {object} obj
 * @param {string} [sep='_']
 * @param {string} [prefix='']
 * @returns {object}
 */
export function collapseObject(obj: any, sep: string = '_', prefix: string = ''): object {
  let result: any = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}${sep}${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(result, collapseObject(v, sep, key));
    } else {
      result[key] = v;
    }
  }
  return result;
}
