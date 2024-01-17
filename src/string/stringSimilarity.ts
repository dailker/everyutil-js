/**
 * Returns a similarity score between two strings (0..1, Levenshtein-based).
 *
 * Uses normalized Levenshtein distance: 1 means identical, 0 means completely different.
 * Example: stringSimilarity("kitten", "sitting") → 0.714
 *
 * @author @dailker
 * @param {string} a - First string.
 * @param {string} b - Second string.
 * @returns {number} Similarity score between 0 and 1.
 */
export function stringSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  const m = a.length, n = b.length;
  if (m === 0 || n === 0) return 0;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  const dist = dp[m][n];
  return 1 - dist / Math.max(m, n);
}
