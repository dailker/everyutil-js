/**
 * Count number of trues in a list.
 * @author @dailker
 */
export function countTrue(array: boolean[]): number {
  return array.filter(Boolean).length;
}
