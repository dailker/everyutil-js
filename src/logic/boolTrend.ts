/**
 * Detects runs, streaks, or reversals in boolean arrays.
 * @author @dailker
 */
export function boolTrend(array: boolean[]): { streaks: number[], reversals: number } {
  if (!array.length) return { streaks: [], reversals: 0 };
  let streaks: number[] = [], reversals = 0, current = array[0], count = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] === current) count++;
    else { streaks.push(count); count = 1; current = array[i]; reversals++; }
  }
  streaks.push(count);
  return { streaks, reversals };
}
