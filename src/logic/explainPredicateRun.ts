/**
 * Logs a step-by-step evaluation of each predicate with labels.
 * @author @dailker
 */
export function explainPredicateRun<T>(input: T, predicates: Array<[string, (x: T) => boolean]>): void {
  for (const [label, fn] of predicates) {
    const result = fn(input);
    console.log(`${label}: ${result}`);
  }
}
