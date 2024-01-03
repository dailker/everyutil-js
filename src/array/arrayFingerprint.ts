/**
 * Hash-style signature of an array for quick diffing.
 * @author @dailker
 * @param {any[]} array
 * @returns {string}
 */
export function arrayFingerprint(array: any[]): string {
  // Simple hash: djb2
  let hash = 5381;
  const str = JSON.stringify(array);
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return hash.toString(16);
}
