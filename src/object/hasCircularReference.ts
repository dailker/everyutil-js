/**
 * Detects if an object has any circular references.
 * @author @dailker
 * @param {object} obj
 * @returns {boolean}
 */
export function hasCircularReference(obj: any): boolean {
  const seen = new WeakSet();
  function detect(o: any): boolean {
    if (o && typeof o === 'object') {
      if (seen.has(o)) return true;
      seen.add(o);
      for (const v of Object.values(o)) {
        if (detect(v)) return true;
      }
      seen.delete(o);
    }
    return false;
  }
  return detect(obj);
}
