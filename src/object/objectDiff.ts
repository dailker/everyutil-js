/**
 * Gets the difference between two objects (deep or shallow).
 * @author @dailker
 * @param {object} a
 * @param {object} b
 * @param {boolean} [deep=true]
 * @returns {object}
 */
export function objectDiff(a: any, b: any, deep: boolean = true): object {
  const diff: any = {};
  for (const k in a) {
    if (!(k in b)) {
      diff[k] = a[k];
    } else if (deep && typeof a[k] === 'object' && typeof b[k] === 'object') {
      const d = objectDiff(a[k], b[k], true);
      if (Object.keys(d).length) diff[k] = d;
    } else if (a[k] !== b[k]) {
      diff[k] = a[k];
    }
  }
  return diff;
}
