/**
 * Returns all dot-notation paths in an object.
 * @author @dailker
 * @param {object} obj
 * @param {string[]} [prefix=[]]
 * @returns {string[]}
 */
export function generateObjectPaths(obj: any, prefix: string[] = []): string[] {
  let paths: string[] = [];
  for (const k in obj) {
    const path = [...prefix, k];
    if (obj[k] && typeof obj[k] === 'object') {
      paths = paths.concat(generateObjectPaths(obj[k], path));
    } else {
      paths.push(path.join('.'));
    }
  }
  return paths;
}
