/**
 * Logical exclusive OR for booleans.
 * @author @dailker
 */
export function xorBool(a: boolean, b: boolean): boolean {
  return !!(a ? !b : b);
}
