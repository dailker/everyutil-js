/**
 * Returns the length of the current streak (e.g. true, true, true, ...).
 * @author @dailker
 */
export function streakLength(array: boolean[]): number {
  if (!array.length) return 0;
  let last = array[array.length - 1], len = 1;
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] === last) len++;
    else break;
  }
  return len;
}
