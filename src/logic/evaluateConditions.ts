/**
 * Given an object of predicates or rules, evaluates which ones pass in a context.
 * @author @dailker
 */
export function evaluateConditions<T>(obj: Record<string, (ctx: T) => boolean>, context: T): Record<string, boolean> {
  const result: Record<string, boolean> = {};
  for (const k in obj) result[k] = obj[k](context);
  return result;
}
