/**
 * Returns the longest increasing subsequence in the array.
 * @author @dailker
 * @param {number[]} array - Input array.
 * @returns {number[]} Longest increasing subsequence.
 */
export function arrayLongestIncreasingSubsequence(array: number[]): number[] {
  const n = array.length;
  if (n === 0) return [];
  const dp = Array(n).fill(1);
  const prev = Array(n).fill(-1);
  let maxLen = 1, maxIdx = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      maxIdx = i;
    }
  }
  const result = [];
  for (let i = maxIdx; i !== -1; i = prev[i]) {
    result.push(array[i]);
  }
  return result.reverse();
}
