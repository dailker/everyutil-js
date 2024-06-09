import { arrayLongestIncreasingSubsequence } from '../../src/array/arrayLongestIncreasingSubsequence';

describe('arrayLongestIncreasingSubsequence', () => {
  it('finds the longest increasing subsequence', () => {
    expect(arrayLongestIncreasingSubsequence([3, 1, 2, 1, 8, 5, 6])).toEqual([1, 2, 5, 6]);
  });
  it('returns empty for empty array', () => {
    expect(arrayLongestIncreasingSubsequence([])).toEqual([]);
  });
});
