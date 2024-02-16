import { renameKeysDeep } from "./renameKeysDeep";

/**
 * Converts all keys to camelCase recursively.
 * @author @dailker
 * @param {object} obj
 * @returns {object}
 */
export function toCamelCaseKeys(obj: any): any {
  const camel = (s: string) => s.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
  return renameKeysDeep(obj, camel);
}
