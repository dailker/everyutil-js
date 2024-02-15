/**
 * Recursively replace all matching values (e.g., replace all "" with null).
 * @author @dailker
 * @param {object} obj
 * @param {any} searchValue
 * @param {any} replaceValue
 * @returns {object}
 */
export function replaceValuesDeep(obj: any, searchValue: any, replaceValue: any): any {
  if (Array.isArray(obj)) return obj.map(v => replaceValuesDeep(v, searchValue, replaceValue));
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, replaceValuesDeep(v, searchValue, replaceValue)])
    );
  }
  return obj === searchValue ? replaceValue : obj;
}
