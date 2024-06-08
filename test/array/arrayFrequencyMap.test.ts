import { arrayFrequencyMap } from '../../src/array/arrayFrequencyMap';

describe('arrayFrequencyMap', () => {
  it('returns frequency map for numbers', () => {
    expect(Array.from(arrayFrequencyMap([1,2,2,3,3,3]))).toEqual([[1,1],[2,2],[3,3]]);
  });

  it('returns frequency map for strings', () => {
    expect(Array.from(arrayFrequencyMap(['a','b','a']))).toEqual([['a',2],['b',1]]);
  });

  it('returns empty map for empty array', () => {
    expect(Array.from(arrayFrequencyMap([]))).toEqual([]);
  });
});
