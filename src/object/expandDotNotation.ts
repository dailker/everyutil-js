/**
 * Converts { "a.b.c": 1 } into { a: { b: { c: 1 }}}.
 * @author @dailker
 * @param {object} obj
 * @returns {object}
 */
export function expandDotNotation(obj: Record<string, any>): object {
  const result: any = {};
  for (const [k, v] of Object.entries(obj)) {
    const keys = k.split('.');
    let curr = result;
    keys.forEach((key, i) => {
      if (i === keys.length - 1) curr[key] = v;
      else curr = curr[key] = curr[key] || {};
    });
  }
  return result;
}
