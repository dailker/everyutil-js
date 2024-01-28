/**
 * Choose action/value based on first truthy condition.
 * @author @dailker
 */
export function decideByPriority<T>(pairs: Array<[boolean, T]>, defaultValue: T): T {
  for (const [cond, val] of pairs) if (cond) return val;
  return defaultValue;
}
