/**
 * Cycles through predicates in round-robin order on each call.
 * @author @dailker
 */
export function cyclePredicates<T>(predicates: Array<(x: T) => boolean>): (x: T) => boolean {
  let i = 0;
  return (x: T) => {
    const result = predicates[i](x);
    i = (i + 1) % predicates.length;
    return result;
  };
}
