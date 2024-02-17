import { renameKeysDeep } from "./renameKeysDeep";

/**
 * Converts all keys to snake_case recursively.
 * @author @dailker
 * @param {object} obj
 * @returns {object}
 */
export function toSnakeCaseKeys(obj: any): any {
  const snake = (s: string) => s.replace(/[A-Z]/g, c => '_' + c.toLowerCase());
  return renameKeysDeep(obj, snake);
}
