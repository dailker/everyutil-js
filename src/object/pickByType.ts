/**
 * Picks keys whose values match a specific type or constructor.
 * @author @dailker
 * @param {object} obj
 * @param {string|Function} typeOrCtor
 * @returns {object}
 */
export function pickByType(obj: object, typeOrCtor: string | Function): object {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) =>
    typeof typeOrCtor === 'string' ? typeof v === typeOrCtor : v instanceof (typeOrCtor as Function)
  ));
}
