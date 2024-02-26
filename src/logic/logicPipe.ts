/**
 * Like composePredicates, but left-to-right boolean chaining (short-circuit aware).
 * @author @dailker
 */
export function logicPipe<T extends any[]>(...predicates: Array<(...args: T) => boolean>): (...args: T) => boolean {
  return (...args: T) => {
    for (const fn of predicates) if (!fn(...args)) return false;
    return true;
  };
}
