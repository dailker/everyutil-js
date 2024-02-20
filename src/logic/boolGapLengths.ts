/**
 * Returns lengths of gaps between true clusters.
 * @author @dailker
 */
export function boolGapLengths(arr: boolean[]): number[] {
  let gaps: number[] = [], gap = 0, inCluster = false;
  for (const v of arr) {
    if (v) {
      if (gap > 0 && inCluster) gaps.push(gap);
      gap = 0;
      inCluster = true;
    } else if (inCluster) gap++;
  }
  return gaps;
}
