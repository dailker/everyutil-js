/**
 * Converts object to array of [key, value] pairs (deep option).
 * @author @dailker
 * @param {object} obj
 * @param {boolean} [deep=false]
 * @returns {Array<[string, any]>}
 */
export function objectToPairs(obj: any, deep: boolean = false): Array<[string, any]> {
  let pairs: Array<[string, any]> = [];
  for (const k in obj) {
    if (deep && obj[k] && typeof obj[k] === 'object') {
      pairs = pairs.concat(objectToPairs(obj[k], true).map(([subk, v]) => [`${k}.${subk}`, v]));
    } else {
      pairs.push([k, obj[k]]);
    }
  }
  return pairs;
}
