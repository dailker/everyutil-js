/**
 * Evaluates and returns first matched rule’s result.
 * @author @dailker
 */
export function evaluateRules<T>(rules: Array<{ condition: (x: T) => boolean, result: any }>, input: T): any {
  for (const rule of rules) if (rule.condition(input)) return rule.result;
  return undefined;
}
