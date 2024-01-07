/**
 * Diagonal zipping of 2D array.
 * @author @dailker
 * @param {any[][]} matrix
 * @returns {any[][]}
 */
export function zipDiagonals(matrix: any[][]): any[][] {
  const m = matrix.length, n = matrix[0]?.length ?? 0;
  const result: any[][] = [];
  for (let d = 0; d < m + n - 1; d++) {
    const diag: any[] = [];
    for (let i = 0; i < m; i++) {
      let j = d - i;
      if (j >= 0 && j < n) diag.push(matrix[i][j]);
    }
    if (diag.length) result.push(diag);
  }
  return result;
}
