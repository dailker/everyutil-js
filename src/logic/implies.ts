/**
 * Logical implication (if A then B).
 * @author @dailker
 */
export function implies(a: boolean, b: boolean): boolean {
  return !a || b;
}
