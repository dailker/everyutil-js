/**
 * Creates a hash from an object’s structure and values (useful for caching).
 * @author @dailker
 * @param {object} obj
 * @returns {string}
 */
export function objectChecksum(obj: any): string {
  const str = JSON.stringify(obj, Object.keys(obj).sort());
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }
  return hash.toString(16);
}
