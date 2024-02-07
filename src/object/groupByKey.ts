/**
 * Groups array of objects by a specified key.
 * @author @dailker
 * @param {Array<object>} arr
 * @param {string} key
 * @returns {object}
 */
export function groupByKey(arr: Array<any>, key: string): Record<string, any[]> {
  return arr.reduce((acc, obj) => {
    const k = obj[key];
    if (!acc[k]) acc[k] = [];
    acc[k].push(obj);
    return acc;
  }, {} as Record<string, any[]>);
}
