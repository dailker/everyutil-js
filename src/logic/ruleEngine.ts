/**
 * Takes an array of { when: (x) => boolean, then: () => result }, runs the first match.
 * @author @dailker
 */
export function ruleEngine<T, R>(rules: Array<{ when: (x: T) => boolean, then: (x: T) => R }>, input: T): R | undefined {
  for (const rule of rules) if (rule.when(input)) return rule.then(input);
  return undefined;
}
