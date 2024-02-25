/**
 * Returns { pass: T[], fail: T[] }.
 * @author @dailker
 * @param items - The array of items to group.
 * @param predicate - The predicate function to test each item.
 * @returns An object with arrays of passing and failing items.
 */
export function groupByPredicate<T>(items: T[], predicate: (x: T) => boolean): { pass: T[], fail: T[] } {
  return {
    pass: items.filter(predicate),
    fail: items.filter(x => !predicate(x))
  };
}
