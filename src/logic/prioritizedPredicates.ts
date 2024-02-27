/**
 * Higher-priority trues dominate the final outcome.
 * @author @dailker
 */
export function prioritizedPredicates(predicates: Array<(...args: any[]) => boolean>, priorities: number[]): boolean {
  let max = -Infinity, result = false;
  for (let i = 0; i < predicates.length; i++) {
    if (predicates[i]() && priorities[i] > max) {
      max = priorities[i];
      result = true;
    }
  }
  return result;
}
