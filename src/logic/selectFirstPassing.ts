/**
 * Returns the first item matching the condition.
 * @author @dailker
 */
export function selectFirstPassing<T>(items: T[], predicate: (x: T) => boolean): T | undefined {
  return items.find(predicate);
}
