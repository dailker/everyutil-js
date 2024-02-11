/**
 * Computes the maximum depth of a nested object.
 * @author @dailker
 * @param {object} obj
 * @returns {number}
 */
export function objectDepth(obj: any): number {
  if (!obj || typeof obj !== 'object') return 0;
  let max = 0;
  for (const v of Object.values(obj)) {
    max = Math.max(max, objectDepth(v));
  }
  return 1 + max;
}
