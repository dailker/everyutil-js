/**
 * Rough memory size estimate of an object in bytes.
 * @author @dailker
 * @param {any} obj
 * @returns {number}
 */
export function getMemorySizeEstimate(obj: any): number {
  const seen = new WeakSet();
  function sizeOf(o: any): number {
    if (o === null || typeof o !== 'object') return 0;
    if (seen.has(o)) return 0;
    seen.add(o);
    let bytes = 0;
    for (const k in o) {
      bytes += k.length * 2;
      bytes += sizeOf(o[k]);
    }
    return bytes;
  }
  return sizeOf(obj);
}
