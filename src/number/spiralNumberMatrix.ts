/**
 * Builds a square matrix of size n x n filled with numbers in spiral order.
 * For example, spiralNumberMatrix(3) returns [[1,2,3],[8,9,4],[7,6,5]].
 * @author @dailker
 * @param {number} n - The size of the matrix (number of rows and columns).
 * @returns {number[][]} The n x n matrix filled in spiral order.
 */
export function spiralNumberMatrix(n: number): number[][] {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let val = 1, top = 0, bottom = n - 1, left = 0, right = n - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) matrix[top][i] = val++;
    top++;
    for (let i = top; i <= bottom; i++) matrix[i][right] = val++;
    right--;
    for (let i = right; i >= left; i--) matrix[bottom][i] = val++;
    bottom--;
    for (let i = bottom; i >= top; i--) matrix[i][left] = val++;
    left++;
  }
  return matrix;
}
