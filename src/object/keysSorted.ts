/**
 * Returns a new object with keys sorted alphabetically.
 * @author @dailker
 * @param {object} obj
 * @returns {object}
 */
export function keysSorted(obj: object): object {
  return Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)));
}
