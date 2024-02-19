/**
 * Counts how many times a boolean array switches value (true→false or false→true).
 * @author @dailker
 */
export function boolFlips(array: boolean[]): number {
  if (array.length < 2) return 0;
  let flips = 0;
  for (let i = 1; i < array.length; i++) if (array[i] !== array[i - 1]) flips++;
  return flips;
}
