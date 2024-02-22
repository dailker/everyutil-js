/**
 * Chains conditional logic like imperative if...else if...else.
 * @author @dailker
 */
export function conditionalChain(steps: Array<{ if: () => boolean, then: () => void }>): void {
  for (const step of steps) if (step.if()) { step.then(); break; }
}
