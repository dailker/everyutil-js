/**
 * Merge multiple objects by zipping values of matching keys.
 * @author @dailker
 * @param {...Record<string, any>[]} objects
 * @returns {Record<string, any>}
 */
export function zipObjects(...objects: Record<string, any>[]): Record<string, any> {
  const keys = Array.from(new Set(objects.flatMap(obj => Object.keys(obj))));
  const result: Record<string, any> = {};
  for (const k of keys) {
    result[k] = objects.map(obj => obj[k]);
  }
  return result;
}
