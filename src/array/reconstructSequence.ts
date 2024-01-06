/**
 * Attempts to find the most likely intended order of shuffled/partially-ordered arrays.
 * @author @dailker
 * @param {any[]} array
 * @returns {any[]}
 */
export function reconstructSequence(array: any[]): any[] {
  // Simple heuristic: sort numbers, then strings, then others
  return array.slice().sort((a, b) => {
    const ta = typeof a, tb = typeof b;
    if (ta === tb) return a > b ? 1 : a < b ? -1 : 0;
    if (ta === 'number') return -1;
    if (tb === 'number') return 1;
    if (ta === 'string') return -1;
    if (tb === 'string') return 1;
    return 0;
  });
}
