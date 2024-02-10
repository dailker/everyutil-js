/**
 * Deep merges objects with a user-provided custom merge function for conflicts.
 * @author @dailker
 * @param {...object[]} objects
 * @param {(a: any, b: any, key: string) => any} customizer
 * @returns {object}
 */
export function mergeWithCustomizer(customizer: (a: any, b: any, key: string) => any, ...objects: any[]): any {
  return objects.reduce((acc, obj) => {
    for (const key in obj) {
      if (acc[key] && obj[key] && typeof acc[key] === 'object' && typeof obj[key] === 'object') {
        acc[key] = mergeWithCustomizer(customizer, acc[key], obj[key]);
      } else if (acc[key] !== undefined) {
        acc[key] = customizer(acc[key], obj[key], key);
      } else {
        acc[key] = obj[key];
      }
    }
    return acc;
  }, {});
}
