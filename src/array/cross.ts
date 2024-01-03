/**
 * Returns the Cartesian product of two arrays.
 * @author @dailker
 * @template A, B
 * @param {A[]} arrayA
 * @param {B[]} arrayB
 * @returns {[A, B][]}
 */
export function cross<A, B>(arrayA: A[], arrayB: B[]): [A, B][] {
  const result: [A, B][] = [];
  for (const a of arrayA) {
    for (const b of arrayB) {
      result.push([a, b]);
    }
  }
  return result;
}
