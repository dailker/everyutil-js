/**
 * Reconstructs a nested object from dot-notation keys.
 * @author @dailker
 * @param {object} obj - The flattened object.
 * @returns {object}
 */
export function unflattenObject(obj: Record<string, any>): object {
  const result: any = {};
  for (const [k, v] of Object.entries(obj)) {
    const keys = k.split('.');
    let curr = result;
    keys.forEach((key, i) => {
      if (i === keys.length - 1) {
        curr[key] = v;
      } else {
        curr[key] = curr[key] || {};
        curr = curr[key];
      }
    });
  }
  return result;
}
