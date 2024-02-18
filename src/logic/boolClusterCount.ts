/**
 * Counts groups of consecutive trues.
 * @author @dailker
 */
export function boolClusterCount(arr: boolean[]): number {
  let count = 0, inCluster = false;
  for (const v of arr) {
    if (v && !inCluster) { count++; inCluster = true; }
    else if (!v) inCluster = false;
  }
  return count;
}
