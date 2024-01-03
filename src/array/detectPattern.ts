/**
 * Detects repeating sequences or structural patterns in an array.
 * @author @dailker
 * @template T
 * @param {T[]} array
 * @returns {{pattern: T[], repeats: number} | null}
 */
export function detectPattern<T>(array: T[]): { pattern: T[]; repeats: number } | null {
  for (let len = 1; len <= array.length / 2; len++) {
    const pattern = array.slice(0, len);
    let repeats = 0;
    for (let i = 0; i + len <= array.length; i += len) {
      if (array.slice(i, i + len).every((v, idx) => v === pattern[idx])) {
        repeats++;
      } else {
        break;
      }
    }
    if (repeats * len === array.length) {
      return { pattern, repeats };
    }
  }
  return null;
}
