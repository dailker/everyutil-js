/**
 * Gets all possible key paths (deep paths) of an object as arrays or dot notation.
 * @author @dailker
 * @param {object} obj
 * @param {string[]} [prefix=[]]
 * @param {boolean} [asDotNotation=false]
 * @returns {Array<string[]|string>}
 */
export function objectPaths(obj: any, prefix: string[] = [], asDotNotation = false): Array<string[]|string> {
  let paths: Array<string[]|string> = [];
  for (const k in obj) {
    const path = [...prefix, k];
    if (obj[k] && typeof obj[k] === 'object') {
      paths = paths.concat(objectPaths(obj[k], path, asDotNotation));
    } else {
      paths.push(asDotNotation ? path.join('.') : path);
    }
  }
  return paths;
}
