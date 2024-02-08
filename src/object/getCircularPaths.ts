/**
 * Returns the key paths where circular references exist.
 * @author @dailker
 * @param {object} obj
 * @returns {string[][]}
 */
export function getCircularPaths(obj: any): string[][] {
  const seen = new WeakMap();
  const paths: string[][] = [];
  function find(o: any, path: string[] = []) {
    if (o && typeof o === 'object') {
      if (seen.has(o)) {
        paths.push([...seen.get(o)]);
        return;
      }
      seen.set(o, path);
      for (const [k, v] of Object.entries(o)) {
        find(v, [...path, k]);
      }
      seen.delete(o);
    }
  }
  find(obj);
  return paths;
}
