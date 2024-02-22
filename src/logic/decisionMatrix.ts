/**
 * Multi-dimensional condition → result matching.
 * @author @dailker
 */
export function decisionMatrix<T, R>(matrix: Array<{ conditions: Array<(ctx: T) => boolean>, result: R }>, context: T): R | undefined {
  for (const row of matrix) if (row.conditions.every(fn => fn(context))) return row.result;
  return undefined;
}
